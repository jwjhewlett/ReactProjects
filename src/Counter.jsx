
export function Counter({ counter, modifyCount }) {

  return (
    <>
    {counter}
    <br/>
    <button onClick={() => modifyCount(1)} className="btn">Increase</button>{'   '}
    <button onClick={() => modifyCount(-counter)} className="btn btn-danger">Reset</button>
    </>
  )
}