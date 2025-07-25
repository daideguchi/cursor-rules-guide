#!/bin/bash

# EC����թ��QCursor Rules�ջ�Ȣ��
# Version: 1.0.0

set -e

echo "=� EC����թ��QCursor Rules�ջ�Ȣ�ג��W~Y..."

# �����ɚ�
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# ���������ǣ���n��
if [[ ! -f "package.json" ]]; then
    echo -e "${RED}L package.jsonL�dK�~[����������g�LWfO`UD${NC}"
    exit 1
fi

echo -e "${BLUE}=� �������1�֗-...${NC}"

# ������֗
PROJECT_NAME=$(node -p "require('./package.json').name" 2>/dev/null || echo "ecommerce-project")
echo -e "${GREEN} ������: ${PROJECT_NAME}${NC}"

# .cursor/rulesǣ���n\
echo -e "${BLUE}=� .cursor/rulesǣ���\-...${NC}"
mkdir -p .cursor/rules

# EC����թ��(Cursor Rules����
echo -e "${BLUE}=� EC����թ��(Cursor Rules�i(-...${NC}"

# �����n4@�֗
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
RULES_SOURCE_DIR="${SCRIPT_DIR}/.cursor/rules"

# ���ա�뒳��
if [[ -d "${RULES_SOURCE_DIR}" ]]; then
    cp -r "${RULES_SOURCE_DIR}"/* .cursor/rules/
    echo -e "${GREEN} Cursor Rules�i(W~W_${NC}"
else
    echo -e "${RED}L ���ա��L�dK�~[�: ${RULES_SOURCE_DIR}${NC}"
    exit 1
fi

# ���û��
echo ""
echo -e "${GREEN}<� EC����թ��QCursor Rules��Ȣ��L��W~W_${NC}"
echo ""
echo -e "${YELLOW}=� !nK:${NC}"
echo -e "${BLUE}1.${NC} .env.localա��\Wf��	p�-�"
echo -e "${BLUE}2.${NC} �������w�Wfޤ������L: npx prisma migrate dev"
echo -e "${BLUE}3.${NC} �z����w�: npm run dev"
echo -e "${BLUE}4.${NC} Cursor��DfAIL��뒭��Sh���"
echo ""
echo -e "${GREEN}> CursornAIL�nEC����թ��(�X�a~W_:${NC}"
echo -e "${BLUE}" F������n��ѿ��${NC}"
echo -e "${BLUE}" PCI DSS��nz����${NC}"
echo -e "${BLUE}" (��h�뿤�${NC}"
echo -e "${BLUE}" ����ƣٹ���ƣ�${NC}"
echo -e "${BLUE}" �թ��� i�S${NC}"
echo ""
echo -e "${GREEN}Happy coding! =�${NC}"