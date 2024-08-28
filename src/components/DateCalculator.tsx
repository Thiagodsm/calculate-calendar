// src/components/DateCalculator.tsx
import { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  differenceInDays,
  differenceInBusinessDays,
  eachWeekendOfInterval,
  differenceInWeeks,
  differenceInMonths,
  differenceInYears,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";

const DateCalculator = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [results, setResults] = useState<any>(null);

  const handleCalculate = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      // Cálculos utilizando date-fns
      const totalDays = differenceInDays(end, start);
      const totalBusinessDays = differenceInBusinessDays(end, start);
      const totalWeekends = eachWeekendOfInterval({ start, end }).length;
      const totalWeeks = differenceInWeeks(end, start);
      const totalMonths = differenceInMonths(end, start);
      const totalYears = differenceInYears(end, start);
      const totalHours = differenceInHours(end, start);
      const totalMinutes = differenceInMinutes(end, start);
      const totalSeconds = differenceInSeconds(end, start);

      // Atualizar resultados
      setResults({
        totalDays,
        totalBusinessDays,
        totalWeekends,
        totalWeeks,
        totalMonths,
        totalYears,
        totalHours,
        totalMinutes,
        totalSeconds,
      });
    }
  };

  return (
    <section id="calculadora" className="py-4">
      <div className="container mx-auto">
        <Card>
          <CardHeader>
            <h2 className="text-xl font-bold">Calculadora de Datas</h2>
          </CardHeader>
          <CardContent>
            <CardDescription className="py-2 ">
              Esta calculadora tem por objetivo simplificar sua vida na hora de fazer calculos com datas. Insira a data de início e fim e veja mágia acontecer!
            </CardDescription>
            <div className="flex flex-col gap-4">
              <Input
                type="date"
                value={startDate}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setStartDate(e.target.value)
                }
                placeholder="Data de Início"
              />
              <Input
                type="date"
                value={endDate}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEndDate(e.target.value)
                }
                placeholder="Data de Fim"
              />
              <Button onClick={handleCalculate}>Calcular</Button>
              {results && (
                <div className="mt-2">
                  <p>Total de Dias: {results.totalDays}</p>
                  <p>Total de Dias Úteis: {results.totalBusinessDays}</p>
                  <p>Total de Finais de Semana: {results.totalWeekends}</p>
                  <p>Total em Semanas: {results.totalWeeks}</p>
                  <p>Total em Meses: {results.totalMonths}</p>
                  <p>Total em Anos: {results.totalYears}</p>
                  <p>Total em Horas: {results.totalHours}</p>
                  <p>Total em Minutos: {results.totalMinutes}</p>
                  <p>Total em Segundos: {results.totalSeconds}</p>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter>
            {/* Footer do Card pode ser usado para adicionar informações adicionais */}
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default DateCalculator;