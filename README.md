# <div align="center"><h1>AIO Chat</h1></div>


![dashboard](https://github.com/IlkerDEMIR-s/smp_our_project/assets/115078996/07d0ce82-d156-4777-a91b-fcad81bd71cd)

Features:

- Clerk Authentication (Email, Google, 9+ Social Logins)
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Image Generation Tool (Open AI)
- Video Generation Tool (Replicate AI)
- Conversation Generation Tool (Open AI)
- Music Generation Tool (Replicate AI)
- Code Generation Tool (Open AI)
- Monthly subscription (Stripe)
- Free tier with API limiting
- Customer Support (Crisp)
- Tailwind design
- Tailwind animations and effects
- Full responsiveness
  

### Project High-Level Design
![High-Level Design](https://github.com/IlkerDEMIR-s/smp_our_project/assets/115078996/8236e697-2a6b-4846-8591-946fc5562b44)

### Database Schema Design
![db](https://github.com/IlkerDEMIR-s/smp_our_project/assets/115078996/10b9da36-2be5-4d18-bf39-c8d4bc7a76a9)


### Prerequisites

**Node version 18.x**

### Cloning the repository

```shell
git clone https://github.com/IlkerDEMIR-s/AIO-Chat.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Setup Prisma

Add MySQL Database (I used Supabase)

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |



## Screenshots from the project

### Conversation Part
![conversation](https://github.com/IlkerDEMIR-s/smp_our_project/assets/115078996/079e1df0-89ba-4e78-b82b-de33d2e0b759)

### Image Generation Part
![image generation](https://github.com/IlkerDEMIR-s/smp_our_project/assets/115078996/9a45ab46-bc47-4390-88ff-683ba6e4944b)
![image generation 2](https://github.com/IlkerDEMIR-s/smp_our_project/assets/115078996/ba709bc2-0bc4-4c61-ba8d-2c4b66c2f159)

### Video Generation Part
![video generation 2](https://github.com/IlkerDEMIR-s/smp_our_project/assets/115078996/bf191d46-08eb-4478-aef8-1f97b3707237)
![video generation](https://github.com/IlkerDEMIR-s/smp_our_project/assets/115078996/31990cee-d341-49b2-aa3f-0aebddbecbac)

### Music Generation Part
![music generation](https://github.com/IlkerDEMIR-s/smp_our_project/assets/115078996/38e70d68-cb8b-48d9-9da6-664e4cf47faf)

### Code Generation Part
![code generation](https://github.com/IlkerDEMIR-s/smp_our_project/assets/115078996/18cc5ade-005e-4ec6-a89b-d75d82934b9f)

### Upgrade Plan Tab
![upgrade plan tab](https://github.com/IlkerDEMIR-s/smp_our_project/assets/115078996/d382f165-0fa5-4834-b8ba-5ef8c9f3a1d8)

### Settings Free Plan Part
![Settings free](https://github.com/IlkerDEMIR-s/smp_our_project/assets/115078996/ba1c95c3-6562-4e01-a64a-bb9557528ec3)

### Settings Pro Plan Part
![Settings pro](https://github.com/IlkerDEMIR-s/smp_our_project/assets/115078996/f763fdb6-b6fa-4485-a1c9-2aed4eeeae01)

### Landing Page
![landing page](https://github.com/IlkerDEMIR-s/smp_our_project/assets/115078996/bb2895bd-8d19-4bd6-a315-1bc75bbb15ab)

### Customer support (Crisp)
![customer support1](https://github.com/IlkerDEMIR-s/AIO-Chat/assets/115078996/4e116dde-b1aa-4c1b-a733-807c7a0948eb)
![customer support2](https://github.com/IlkerDEMIR-s/AIO-Chat/assets/115078996/5a17f426-b0c4-43e2-bc96-e89ea95edd84)

## Icon

### 'Has not yet generated' icon
[icons8.com/illustrations](https://icons8.com/illustrations/illustration/casual-life-3d-boy-and-girl-sitting-in-front-of-laptop)
