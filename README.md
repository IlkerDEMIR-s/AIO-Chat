# <div align="center"><h4>AIO Chat</h4></div>


![dashboard](https://github.com/IlkerDEMIR-s/AIO-Chat/blob/main/public/ss/dashboard.png)

Features:

- Clerk Authentication (Email, Google, Microsoft, Github 21+ Social Logins)
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Image Generation Tool (Open AI)
- Video Generation Tool (Replicate AI)
- Conversation Generation Tool (Open AI)
- Music Generation Tool (Replicate AI)
- Code Generation Tool (Open AI)
- Monthly subscription (Stripe Payment Gateway)
- Free tier with API limiting
- Customer Support (Crisp)
- Tailwind design
- Tailwind animations and effects
- Shadcn/ui design
- Full responsiveness
  

### Project High-Level Design
![High-Level Design](https://github.com/IlkerDEMIR-s/AIO-Chat/blob/main/public/ss/High-Level%20Design.png)

### Database Schema Design
![db](https://github.com/IlkerDEMIR-s/AIO-Chat/blob/main/public/ss/db.png)


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
DIRECT_URL=

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
![conversation](https://github.com/IlkerDEMIR-s/AIO-Chat/blob/main/public/ss/conversation.png)

### Image Generation Part
![image generation](https://github.com/IlkerDEMIR-s/AIO-Chat/blob/main/public/ss/image%20generation.png)
![image generation 2](https://github.com/IlkerDEMIR-s/AIO-Chat/blob/main/public/ss/image%20generation%202.png)

### Video Generation Part
![video generation 1](https://github.com/IlkerDEMIR-s/AIO-Chat/blob/main/public/ss/video%20generation%201.png)
![video generation 2](https://github.com/IlkerDEMIR-s/AIO-Chat/blob/main/public/ss/video%20generation%202.png)
![video generation 3](https://github.com/IlkerDEMIR-s/AIO-Chat/blob/main/public/ss/video%20generation3.png)
![video generation 4](https://github.com/IlkerDEMIR-s/AIO-Chat/blob/main/public/ss/video%20generation%204.png)

### Music Generation Part
![music generation](https://github.com/IlkerDEMIR-s/AIO-Chat/blob/main/public/ss/music%20generation.png)

### Code Generation Part
![code generation](https://github.com/IlkerDEMIR-s/AIO-Chat/blob/main/public/ss/code%20generation.png)

### Upgrade Plan Tab
![upgrade plan tab](https://github.com/IlkerDEMIR-s/AIO-Chat/blob/main/public/ss/upgrade%20plan%20tab.png)

### Settings Free Plan Part
![Settings free](https://github.com/IlkerDEMIR-s/AIO-Chat/blob/main/public/ss/Settings%20free.png)

### Settings Pro Plan Part
![Settings pro](https://github.com/IlkerDEMIR-s/AIO-Chat/blob/main/public/ss/Settings%20pro.png)

### Landing Page
![landing page](https://github.com/IlkerDEMIR-s/AIO-Chat/blob/main/public/ss/landing%20page.png)

### Customer support (Crisp)
![customer support1](https://github.com/IlkerDEMIR-s/AIO-Chat/blob/main/public/ss/customer%20support1.png)
![customer support2](https://github.com/IlkerDEMIR-s/AIO-Chat/blob/main/public/ss/customer%20support2.png)

## Icon

### 'Has not yet generated' icon
[icons8.com/illustrations](https://icons8.com/illustrations/illustration/casual-life-3d-boy-and-girl-sitting-in-front-of-laptop)
