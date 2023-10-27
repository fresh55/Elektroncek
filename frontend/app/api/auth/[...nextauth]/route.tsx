import NextAuth,{type NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authUser } from "@/lib/auth";


export const authOptions: NextAuthOptions = {
  
  secret: process.env.NEXTAUTH_SECRET, 

  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: "/login",
  },
  
 
  
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
      
        const authResponse = await authUser(
          credentials.email,
          credentials.password
        );

       
        if(authResponse){
        
          return Promise.resolve(authResponse);

        }else {

          // If the authentication fails, return null or throw an error
          return Promise.resolve(null);
        }
         
        
       
      },
    }),

  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.uid;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
 
  
};


const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }