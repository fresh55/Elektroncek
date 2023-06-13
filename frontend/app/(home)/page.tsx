
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'

  export default async function Home(){
  const session = await getServerSession(authOptions)

  return (
   
    <div className="text-rose-500 text-2xl">
    <pre>{JSON.stringify(session)}</pre>
     HELLO AIRBNB
    </div>
  );
}

