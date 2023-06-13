import Header from "@/components/Header";
import { Providers } from "@/app/provider";
export default function homeLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode;
  }) {
    return (
      
       
       <div>
        <Providers>
       <Header/>
       
        {children}
        </Providers>
        
        </div>
   
    );
  }