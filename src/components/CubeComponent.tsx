interface CubeComponentProps {
    x: number;
}
const CubeComponent = ({ x }: CubeComponentProps) => {
    const cube = (x: number) => x ** 3

    const isVowel = (chr: string): boolean => {
        const vowel_list = ['a', 'e', 'i', 'o', 'u']
        //OR const vowel_list = ["aeiouAEIOU"]
        const ch = chr.toLowerCase()
        return (vowel_list.includes(ch))
    }
    // use a function in another function
    const isConsonant = (ch: string): boolean => {
        return !isVowel(ch)
    }

    const isUpper = (ch: string): boolean => {
        //const myAnswer = ch == ch.toUpperCase();
        //return myAnswer
        return ch === ch.toUpperCase();
    }

    const function1 = () => {
        console.log("function1 is called")
    }
    const function2 = (x) => {
        console.log(x ** 2)
    }

    const printTable = (x:number):void => {
        for(let i = 1 ; i <= 10 ; i++){
         console.log(`${x} x ${i} = ${x*i}`)   
        }
            
    }
    return (
        <div>
            <button onClick={() => printTable(5)}>Print Table</button>
            <button onClick={function1}>Function 1</button>
            <button onClick={() => function2(5)}>Function 2</button>
            <h1>{isUpper('E') ? "uppercase" : "lowercase"}</h1>
            {/* result: {cube(x)} */}
            {/* Is vowel: {isVowel('g')? "vowel":"consonant"} */}
            Is consonant: {isConsonant('g') ? "vowel" : "consonant"}
        </div>
    )
}

export default CubeComponent
