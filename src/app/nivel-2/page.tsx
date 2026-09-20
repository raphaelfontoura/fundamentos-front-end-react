import { ContadorGlobal } from "@/components/ContadorGlobal";
import { ContadorGlobalValor } from "@/components/ContadorGlobalValor";

const Page  = () => (
    <div>
        <h1 className="text-4xl font-bold">Página Nível 2</h1>
        <ContadorGlobal />
        <br />
        <ContadorGlobalValor />
    </div>
);

export default Page;