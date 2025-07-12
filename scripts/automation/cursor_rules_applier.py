#!/usr/bin/env python3
"""
Cursor Rules Applier - ワンコマンドでCursor Rulesを適用

.cursor/rules/フォルダ内のファイル群を他のプロジェクトに適用するスクリプト
"""

import os
import sys
import shutil
import argparse
import subprocess
from pathlib import Path
from datetime import datetime
import yaml

class CursorRulesApplier:
    def __init__(self):
        self.script_dir = Path(__file__).parent.parent.parent
        self.source_rules_dir = self.script_dir / ".cursor" / "rules"
        self.templates_config = self.source_rules_dir / "template-config.yml"
        
    def load_templates_config(self):
        """テンプレート設定を読み込み"""
        try:
            with open(self.templates_config, 'r', encoding='utf-8') as f:
                return yaml.safe_load(f)
        except FileNotFoundError:
            print(f"❌ Template config not found: {self.templates_config}")
            return None
        except yaml.YAMLError as e:
            print(f"❌ Error loading template config: {e}")
            return None

    def get_git_info(self):
        """Git情報を取得"""
        try:
            user_name = subprocess.check_output(['git', 'config', 'user.name'], text=True).strip()
        except:
            user_name = "Unknown"
        
        try:
            user_email = subprocess.check_output(['git', 'config', 'user.email'], text=True).strip()
        except:
            user_email = "unknown@example.com"
            
        return user_name, user_email

    def apply_template_variables(self, content, project_name, template_type):
        """テンプレート変数を置換"""
        user_name, user_email = self.get_git_info()
        current_date = datetime.now().strftime('%Y-%m-%d')
        
        replacements = {
            '{{PROJECT_NAME}}': project_name,
            '{{project_name}}': project_name,
            '{{DATE}}': current_date,
            '{{current_date}}': current_date,
            '{{AUTHOR}}': user_name,
            '{{git_user_name}}': user_name,
            '{{DESCRIPTION}}': f"{template_type} project",
            '{{project_description}}': f"{template_type} project",
            '{{TEMPLATE_TYPE}}': template_type,
            '{{template_type}}': template_type,
            '{{timestamp}}': datetime.now().strftime('%Y-%m-%d %H:%M')
        }
        
        for placeholder, value in replacements.items():
            content = content.replace(placeholder, value)
        
        return content

    def copy_rules_files(self, target_dir, template_type="default", project_name=None):
        """Cursor Rulesファイルをコピー"""
        if project_name is None:
            project_name = Path(target_dir).name
            
        target_rules_dir = Path(target_dir) / ".cursor" / "rules"
        
        # バックアップ作成
        if target_rules_dir.exists():
            backup_dir = target_rules_dir.parent / "rules_backup"
            if backup_dir.exists():
                shutil.rmtree(backup_dir)
            shutil.copytree(target_rules_dir, backup_dir)
            print(f"📦 Backup created: {backup_dir}")
        
        # ディレクトリ作成
        target_rules_dir.mkdir(parents=True, exist_ok=True)
        
        # ファイルコピー
        files_copied = []
        
        for source_file in self.source_rules_dir.rglob("*"):
            if source_file.is_file():
                # 相対パスを計算
                rel_path = source_file.relative_to(self.source_rules_dir)
                target_file = target_rules_dir / rel_path
                
                # ディレクトリ作成
                target_file.parent.mkdir(parents=True, exist_ok=True)
                
                # ファイル内容読み込み
                try:
                    with open(source_file, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    # テンプレート変数置換
                    content = self.apply_template_variables(content, project_name, template_type)
                    
                    # ファイル書き込み
                    with open(target_file, 'w', encoding='utf-8') as f:
                        f.write(content)
                    
                    files_copied.append(str(rel_path))
                    print(f"✅ Copied: {rel_path}")
                    
                except Exception as e:
                    print(f"❌ Error copying {rel_path}: {e}")
        
        return files_copied

    def validate_application(self, target_dir):
        """適用結果を検証"""
        target_rules_dir = Path(target_dir) / ".cursor" / "rules"
        
        required_files = [
            "globals.mdc",
            "rules.mdc", 
            "todo.mdc",
            "uiux.mdc",
            "template-config.yml",
            "dev-rules/coding-standards.mdc",
            "dev-rules/git-workflow.mdc",
            "dev-rules/testing-guidelines.mdc"
        ]
        
        missing_files = []
        for file_path in required_files:
            if not (target_rules_dir / file_path).exists():
                missing_files.append(file_path)
        
        if missing_files:
            print(f"⚠️  Missing files: {missing_files}")
            return False
        
        print("✅ All required files applied successfully")
        return True

    def auto_commit_if_git(self, target_dir, template_type):
        """Git リポジトリの場合は自動コミット"""
        try:
            os.chdir(target_dir)
            
            # Git リポジトリかチェック
            subprocess.run(['git', 'status'], check=True, capture_output=True)
            
            # ファイルを追加
            subprocess.run(['git', 'add', '.cursor/'], check=True)
            
            # コミット
            commit_message = f"Apply Cursor Rules template: {template_type} ({datetime.now().strftime('%Y-%m-%d %H:%M')})"
            subprocess.run(['git', 'commit', '-m', commit_message], check=True)
            
            print(f"🎯 Auto-committed changes: {commit_message}")
            return True
            
        except subprocess.CalledProcessError:
            print("📝 Not a git repository or no changes to commit")
            return False
        except Exception as e:
            print(f"❌ Error during auto-commit: {e}")
            return False

    def apply_rules(self, target_dir, template_type="youtube_sheet", auto_commit=True):
        """Cursor Rulesを適用"""
        target_path = Path(target_dir).resolve()
        
        if not target_path.exists():
            print(f"❌ Target directory does not exist: {target_path}")
            return False
        
        print(f"🎯 Applying Cursor Rules to: {target_path}")
        print(f"📋 Template type: {template_type}")
        print("=" * 50)
        
        # ファイルコピー
        files_copied = self.copy_rules_files(target_path, template_type)
        
        if not files_copied:
            print("❌ No files were copied")
            return False
        
        # 検証
        if not self.validate_application(target_path):
            print("❌ Validation failed")
            return False
        
        # 自動コミット
        if auto_commit:
            self.auto_commit_if_git(target_path, template_type)
        
        print("=" * 50)
        print("✅ Cursor Rules applied successfully!")
        print(f"📁 Files copied: {len(files_copied)}")
        print(f"📂 Target: {target_path}/.cursor/rules/")
        
        return True

def main():
    parser = argparse.ArgumentParser(description="Apply Cursor Rules to a project")
    parser.add_argument("target", nargs="?", default=".", help="Target directory (default: current directory)")
    parser.add_argument("--template", default="youtube_sheet", 
                       choices=["youtube_sheet", "web_app", "api_server", "custom"],
                       help="Template type to apply")
    parser.add_argument("--no-commit", action="store_true", help="Skip auto-commit")
    parser.add_argument("--list-templates", action="store_true", help="List available templates")
    
    args = parser.parse_args()
    
    applier = CursorRulesApplier()
    
    if args.list_templates:
        config = applier.load_templates_config()
        if config and 'templates' in config:
            print("🎯 Available Templates:")
            print("=" * 30)
            for name, template in config['templates'].items():
                print(f"📋 {name}: {template.get('description', 'No description')}")
        return
    
    # Cursor Rules適用
    success = applier.apply_rules(
        target_dir=args.target,
        template_type=args.template,
        auto_commit=not args.no_commit
    )
    
    sys.exit(0 if success else 1)

if __name__ == "__main__":
    main()