import ForParents from 'components/MainComponents/ForParents/ForParents'
import GamesSection from 'components/MainComponents/GamesSection/GamesSection'
import LearnMore from 'components/MainComponents/LearnMore/LearnMore'
import ParagraphForParents from 'components/MainComponents/ParagraphForParents/ParagraphForParents'
import Slider from 'components/MainComponents/Slider/Slider'

const Main = () => {
    return (
        <main>
            <LearnMore />
            <Slider />
            <GamesSection />
            <ForParents />
            <ParagraphForParents />
        </main>
    )
}
export default Main
