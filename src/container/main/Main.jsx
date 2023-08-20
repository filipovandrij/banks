import Comments from 'components/MainComponents/Comments/Comments'
import FAQ from 'components/MainComponents/FAQ/FAQ'
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
            <Comments />
            <FAQ />
        </main>
    )
}
export default Main
