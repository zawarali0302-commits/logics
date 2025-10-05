import ArticleComponent from "./ArticleComponent"
import AsideComponent from "./AsideComponent"
import SectionComponent from "./SectionComponent"

const BodyComponent = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <div className="bg-amber-500 grid place-content-center"><SectionComponent /></div>
        <div className="bg-violet-500 grid place-content-center"><ArticleComponent /></div>
      </div>
      <div className="grid place-content-center bg-cyan-500"> <AsideComponent /></div>
    </div>
  )
}

export default BodyComponent
