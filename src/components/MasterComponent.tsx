import BodyComponent from "./BodyComponent"
import FooterComponent from "./FooterComponent"
import HeaderComponent from "./HeaderComponent"
import NavComponent from "./NavComponent"

const MasterComponent = () => {
    return (
        <div className="grid">
            <div className="bg-red-500 grid place-content-center">  <HeaderComponent /></div>
            <div className="bg-green-500 grid place-content-center"> <NavComponent /></div>
            <div> <BodyComponent /></div>
            <div className="bg-emerald-500 grid place-content-center"><FooterComponent /></div>
        </div>

    )
}

export default MasterComponent
