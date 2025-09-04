import ResumeShowcase from "@/components/Resume/ResumeShowcase";
import { demoData } from "@/components/Resume/demoData";
import MainLayout from "@/components/layouts/MainLayout";

export default function ResumePage(){
    return(
        <MainLayout>
            <ResumeShowcase data={demoData}/>
        </MainLayout>
        // <main className="min-h-screen bg-background text-foreground">

        //     <ResumeShowcase data={demoData} />

        // </main>
    )
}