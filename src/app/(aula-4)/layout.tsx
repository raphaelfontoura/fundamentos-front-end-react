import { AuthProvider } from "@/context/aula-4/AuthContext";


export default function Layout({ children }: LayoutProps<"/">) {
    return (
        <div className="p-4 flex items-center justify-center">
            <AuthProvider>
                {children}
            </AuthProvider>
        </div>
    );
}
