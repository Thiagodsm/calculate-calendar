import { useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { ThemeContext } from "../components/Layout/Provider";
import TitlePage from "../components/Layout/TitlePage";

export default function Home() {

  const theme = useContext(ThemeContext);

  return (
    <>
      <TitlePage title="Início" description="Calculajá - cálculos diversos agrupados em um só lugar." />
        <Card className="mt-5 border-dashed">
          <CardContent>
            <center>
              <img
                className="mt-5 sm:w-[260px] sm:h-[300px] md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[600px]"
                src={theme?.theme === 'dark' ? "/team_engineering_white.svg" : "/team_engineering.svg"}
              >
              </img>

            </center>
          </CardContent>
          <CardHeader>
              <CardTitle className='font-bold'>{`Em desenvolvimento...`}</CardTitle>
              <CardDescription className='text-slate-300'>Aguarde...</CardDescription>
          </CardHeader>

        </Card>
    </>
  )
}
