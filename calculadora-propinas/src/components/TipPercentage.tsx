const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-15',
    value: .15,
    label: '15%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  }
]

type TipProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>
  tip: number
}

export const TipPercentage = ({ setTip, tip } : TipProps) => {
  return (
      <>
        <h2 className="font-black text-2xl">Propina:</h2>
        <form>
          {
            tipOptions.map(tipOption =>(
                <div key={tipOption.id} className="flex gap-2">
                  <label htmlFor={tipOption.id}>{tipOption.label}</label>
                  <input 
                    type="radio"
                    id = {tipOption.id}
                    name="tip"
                    value={tipOption.value}
                    onChange={e => setTip(+e.target.value)}
                    checked= {tipOption.value === tip}
                  />
                </div>
            ))        
          }
        </form>
      </>
  )
}
