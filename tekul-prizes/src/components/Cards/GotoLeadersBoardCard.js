import Button from "../ui-components/Button";

export default function GotoLeaders(){
return(
    <div className="h-64 bg-cyan-900 p-5 rounded-lg text-slate-200">
        <h2 className="font-bold text-slate-300 text-lg">LEADERBOARDS</h2>
        <div className="flex py-4">
            <div>
            <h4 className="font-bold text-lg">Good Job!</h4>

            <p className="pr-3 text-sm">
            You finished #26 and kept your position in the Bronze League
            </p>
            </div>
            <img
          className="h-20 rounded-md opacity-50"
          src="./assets/profile-icon.jpeg"
          alt="prize pic"
        /> 
        </div>

        <button className="border-2 w-full px-8 py-2 my-4 text-nowrap border-slate-400 rounded-xl font-semibold text-zinc-100 text-sm hover:bg-cyan-800 align-middle">
          {" "}
          GO TO LEADERSBOARD
        </button>
        <Button />
    </div>
)
}