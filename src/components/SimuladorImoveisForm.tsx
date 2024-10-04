import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "../components/ui/form"
  import { Input } from "../components/ui/input"
  import { Button } from "../components/ui/button";
  
  import { zodResolver } from "@hookform/resolvers/zod";
  import { useForm } from "react-hook-form";
  import { z } from "zod";
  import { formSchema } from "../schemas/formSchema";
  import { toast } from "sonner";

type CreateCalculaImoveisFormData = z.infer<typeof formSchema>;

interface SimuladorImoveisFormProps{
    onSubmit: (data: CreateCalculaImoveisFormData) => void;
}

export function SimuladorImoveisForm({ onSubmit }: SimuladorImoveisFormProps) {
    const form = useForm<CreateCalculaImoveisFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            valorArrematacao: 0,   
            valorVenda: 0,         
            comissaoLeiloeiro: 0,
            itbi: 3,
            registroImovel: 3471.96,
            comissaoImobiliaria: 6,
            ir: 15,
            desocupacao: 0,
            reforma: 0,
            outrosGastos: 0,
            mesesVenda: 0,
            iptuMensal: 0,
            condominioMensal: 0,
        },
        mode: 'onChange',
        });

    const {/*control,*/ /*handleSubmit,*/ /*watch,*/ formState: {errors}} = form;      
    
    if(errors){
        console.log({errors});
      } 


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
            control={form.control}
            name="valorArrematacao"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Valor de Arrematação</FormLabel>
                <FormControl>
                    <Input {...field} type="number" placeholder="Valor de Arrematação" />
                </FormControl>
                <FormDescription>
                    Valor de arrematação do imóvel
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="valorVenda"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Valor de Venda</FormLabel>
                <FormControl >
                    <Input {...field} type="number" placeholder="Valor de Venda" />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <h6 className="font-semibold mb-4">Custos para arrematar</h6>
            <FormField
            control={form.control}
            name="itbi"
            render={({ field }) => (
                <FormItem>
                <FormLabel>ITBI (%)</FormLabel>
                <FormControl>
                    <Input {...field} type="number" placeholder="ITBI" />
                </FormControl>
                <FormDescription>
                    Imposto sobre a Transmissão de Bens Imóveis - incide sobre a transferência de bens imóveis.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="registroImovel"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Valor do Registro do Imóvel</FormLabel>
                <FormControl>
                    <Input {...field} type="number" placeholder="Valor do Registro" />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="desocupacao"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Desocupação</FormLabel>
                <FormControl>
                    <Input {...field} type="number" placeholder="Desocupação" />
                </FormControl>
                <FormDescription>
                    Valores gastos com advogado ou atual morador para desocupar o imóvel
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="reforma"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Reformas</FormLabel>
                <FormControl>
                    <Input {...field} type="number" placeholder="Reformas" />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

            <FormField
            control={form.control}
            name="outrosGastos"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Outros Gastos</FormLabel>
                <FormControl>
                    <Input {...field} type="number" placeholder="Outros Gastos" />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

            <h6 className="font-semibold mb-4">Custos até a venda</h6>
            <FormField
            control={form.control}
            name="mesesVenda"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Prazo de venda (meses)</FormLabel>
                <FormControl>
                    <Input {...field} type="number" placeholder="Prazo de Venda" />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

            <FormField
            control={form.control}
            name="iptuMensal"
            render={({ field }) => (
                <FormItem>
                <FormLabel>IPTU Mensal</FormLabel>
                <FormControl>
                    <Input {...field} type="number" placeholder="IPTU Mensal" />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

            <FormField
            control={form.control}
            name="condominioMensal"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Condomínio Mensal</FormLabel>
                <FormControl>
                    <Input {...field} type="number" placeholder="Condomínio Mensal" />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

            <h6 className="font-semibold mb-4">Custos de venda</h6>
            <FormField
            control={form.control}
            name="comissaoImobiliaria"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Comissão da Imobiliária (%)</FormLabel>
                <FormControl>
                    <Input {...field} type="number" placeholder="Comissão da Imobiliária" />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

            <FormField
            control={form.control}
            name="ir"
            render={({ field }) => (
                <FormItem>
                <FormLabel>IR (%)</FormLabel>
                <FormControl>
                    <Input {...field} type="number" placeholder="IR" />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

            <Button 
            type="submit"
            onClick={() => 
                toast("Dados enviados para cálculo",{
                description: "dados",
                action: {
                    label: "Fechar",
                    onClick: () => console.log("Fechar"),
                }
                })
            }
            >Calcular
            </Button>
            </form>
        </Form>
    )
}