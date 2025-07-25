# EC����թ��QCursor Rules

,<�jEC����������׋zkyW_Cursor Rules������gY

## <� �a������

- **EC���**:  ,��Q�������
- **B2B������줹**: m������թ��
- **Ǹ��F���**: ��Ȧ�������ĩ��
- **�ֹ��׷��**: ��e��6��ӹ
- **�������**: p��������թ��

## <� �S��ï

### ���Ȩ��
- **Next.js 14**: App Router + Server Components
- **TypeScript 5**: �h��h�z
- **Tailwind CSS**: ��ƣ�ƣա���CSS
- **React Hook Form**: թ��
- **Zod**: �����������

### �ï���
- **Prisma**: ��hORM
- **PostgreSQL**: ��������
- **Redis**: ��÷���÷��
- **Stripe**: z�PCI DSS��	

### �z�K(
- **ESLint + Prettier**: �����
- **Jest + Testing Library**: ƹȰ�
- **Husky**: Git hooks
- **Docker**: ������

## =� ����ɻ�Ȣ��

```bash
# ���������g�L
curl -fsSL https://raw.githubusercontent.com/your-repo/cursor-rules/main/mdcs/ecommerce-platform/setup.sh | bash
```

~_oKջ�Ȣ��

```bash
# 1. ���ա��������k���
cp -r ./mdcs/ecommerce-platform/.cursor .

# 2. ��Ȣ�׹���ȟL
./mdcs/ecommerce-platform/setup.sh
```

## =� +~��Cursor Rules

### 1. Core Foundation (`core-foundation.mdc`)
- **Alwaysi(**: ������hSn�,���
- **����ƣ**: PCI DSS���HTTPS��XSS/CSRF�V
- **�թ���**: Core Web Vitals i
- **������ƣ**: WCAG 2.1 AA��
- **TypeScript**: strict mode�Zod;(

### 2. Product Management (`product-management.mdc`)
- **Auto Attached**: F��#ա����Bk��i(
- **F�������**: �h���� ���
- **(��**: �뿤���6�
- **;� i**: WebP	��E���
- **"_�**: Elasticsearchq�ա���"

### 3. Payment & Orders (`payment-orders.mdc`)
- **Auto Attached**: z�臢#ա����Bk��i(
- **z����ƣ**: Stripe������1�X�b
- **臡**: �h������ƣ��K�
- **M�**: 0�%���
- **���**: ������(���

## =� ����ƣ_�

### PCI DSS��
- ����1n^�XStripe Vault;(	
- HTTPS��
- ���jWebhook�
- ����2

###  ,����ƣ
- CSRF�whթ��	
- XSS�VCSP��	
- SQL�󸧯����V
- Rate Limiting
- ����ƣ����-�

## � �թ��� i

### Core Web Vitals��
- **LCP < 2.5s**: ;� i�CDN;(
- **FID < 100ms**: ���r�E���
- **CLS < 0.1**: 줢�ȷ��2b

### ��÷�&e
- **F� �**: Redis 15��÷�
- **F�s0**: Redis 30��÷�
- **Y�����**: CDN8���÷�
- **API�T**: ISR + Edge caching

## <� UI/UX_�

### ����Ƕ��
- �Ф�ա���-
- ���������UI
- ��������

### ������ƣ
- ������Ӳ����
- �����������
- ij��������
- Focus management

## =� ���

### Ӹ͹��꯹
- �
�
- F��թ���
- ����L���
- ��������

### �S�
- �����Sentry	
- �թ����
- ������꯹
- ����-�

## =' �z������

### ��
```bash
# �������ï
npm run lint
npm run type-check
npm run test

# ������ï
npm run pre-commit
```

### ƹ�&e
- **Unit Tests**: 85%�
���ø
- **Integration Tests**: API�������
- **E2E Tests**: ;��������
- **Visual Regression**: UI	��

## =� �z���

### ǣ���� 
```
src/
   app/                    # Next.js App Router
      (auth)/            # �<����
      (shop)/            # ��������
      api/               # API Routes
   components/            # �)(�������
      ui/               # ���ƣ�UI
      forms/            # թ��#
      ecommerce/        # EC(�������
      layouts/          # 줢��
   lib/                  # Ӹ͹��ï
      auth/            # �<
      payments/        # z
      inventory/       # (��
      analytics/       # �
   types/               # TypeScript���
   hooks/               # �����ï
```

### }�G
- **�������**: `PascalCase` (ProductCard, CartSummary)
- **���**: `kebab-case` (product-detail, checkout-success)
- **�p**: `camelCase` (calculateTax, validateEmail)
- **�p**: `UPPER_SNAKE_CASE` (MAX_CART_ITEMS)

## =� ́j��

### v�k��yM���
- L ����1�����k�XWjD
- L ��1���k��WjD
- L SQL�󸧯���1'�\�jD
- L console.log�,j��k�UjD
-  hfnz�oStripeL1g�L
-  (�	�o�Z��󶯷��g�L
-  ����e�o�Z�������

### �թ����
- Lighthouse Score 95��
�
- API�TB� 500ms�
- ;ϵ�� i�
- �Ф�h:�͖

## = ���9�

### ������
- ����ƣ��!	
- �թ����1!	
- �����ƣƹ�!	
- A/Bƹ�P��1!	

### ��������
- �X��n���
- ����ƣ���i(
- Cursor Rules9�
- �_���

## =� �OB���ѿ��

### F�"n��
```typescript
// Elasticsearchqѿ��
const searchProducts = async (params: SearchParams) => {
  // ��o product-management.mdc �g
};
```

### z���n��
```typescript
// Stripe PaymentIntent ѿ��
const processPayment = async (orderData: OrderData) => {
  // ��o payment-orders.mdc �g
};
```

### (��n��
```typescript
// ���ï(���ѿ��
const updateInventory = async (productId: string, quantity: number) => {
  // ��o product-management.mdc �g
};
```

## <� ������ƣ�

### �OB�OL
1. **Stripe Webhook ���**: ���ݤ��-���
2. **(�t**: ��󶯷��ź�
3. **;�h:���**: Next.js Image-���
4. **"�թ���**: ���ï�-���

### ����
- [GitHub Issues](https://github.com/your-repo/cursor-rules/issues)
- [Discord Community](https://discord.gg/your-server)
- [Documentation](https://docs.your-domain.com)

---

**Version**: 1.0.0  
**Last Updated**: 2025-07-12  
**Compatibility**: Cursor v0.42+, Next.js 14+