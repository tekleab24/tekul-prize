import { Atom } from "lucide-react";

export default function DailyEttas() {
  return <div className="border-2 my-5 p-4 border-slate-600 rounded-lg">
    <div className="flex justify-between pb-5">
        <h3 className="text-xl font-semibold">
            Daily Ettas
        </h3>
        <a href=" " className="text-sm  font-bold text-slate-600">VIEW ALL</a>
    </div>
    <div className="flex">
        < Atom className="text-yellow-600 "/>
        <div>
            <h4 className="pl-3 font-semibold" >
                Earn Upto 1000 Birr Prizes
            </h4>
            <p className="pl-3 pt-2 text-slate-600">
                12 Prizes Available
            </p>
        </div>
    </div>
  </div>;
}
