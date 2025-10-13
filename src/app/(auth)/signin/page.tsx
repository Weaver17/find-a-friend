import { CustomSignInForm } from "@/components/auth/c_signin-form";

function Page() {
    return (
        <div className="relative flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full md:w-2/3 lg:w-[40%]">
                <CustomSignInForm />
            </div>
        </div>
    );
}

export default Page;
