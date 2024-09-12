FROM node:18

# Set environment variables
ENV NODE_ENV=production
ENV PORT=5000
ENV MONGO_URL = mongodb+srv://ishaankhullar06:PBR8tVFtY4IkLmhk@getyourdiet.odjj1.mongodb.net/?retryWrites=true&w=majority&appName=getYourDiet
ENV JWT_SECRET=2b3e4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c
ENV STRIPE_SECRET_KEY = sk_test_51PxLovJk6AYy1C7ZTuL6UZs98UEohuMqxGRgmr7tfJj2qYkIEdKGOAmaI7XcXGYvOguMUu7koJcSB25o37jQ4a2s00taVOm8m5
ENV BASE_URL = https://get-your-diet.vercel.app
ENV GOOGLE_API_KEY = AIzaSyBXUK3FV1hO7HO_XSGRbOyhJHOCNctqwO0


WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
