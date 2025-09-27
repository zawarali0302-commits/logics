
interface NavtacProps {
    num1: number;
    num2: number;

}
const Logics = ({ num1, num2 }: NavtacProps) => {
    function add(a: number, b: number): number {
        const x1 = a.toString()
        const x2 = b.toString()
        const merged = x1 + x2
        return Number(merged) + 1
        // or just use this  return (a*10 + b) + 1

    }

    function test(a: number, b: string): string {

        return a + b
    }

    function centigradeToFarenheit(c: number): number {
        return Math.floor(c * 1.8) + 32
    }
    function kmsToText(n: number): string {
        const x1 = Math.floor(n)
        const x2 = Math.round((n - x1) * 1000)

        return `${x1} kilometers and ${x2} meters`

    }
      function kmsToText2(n:number):string{
          const km = Math.floor(n)
          const m = (n*1000) % 1000
          if (m==0)
            return `${km} kilometers only`
        else
            return `${km} kilometers and ${m} meters`
}

return <div>Navtac : {kmsToText2(23)}</div>
return <div>Navtac : {kmsToText(23.7)}</div>
return <div>Navtac : {kmsToText(23.7)}</div>
return <div>Navtac : {centigradeToFarenheit(37)}</div>
return <div>Navtac : {test(num1, "abc")}</div>
return <div>Navtac : {add(num1, num2)}</div>

}


export default Logics
