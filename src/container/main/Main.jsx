import ForParents from 'components/MainComponents/ForParents/ForParents'
import GamesSection from 'components/MainComponents/GamesSection/GamesSection'
import LearnMore from 'components/MainComponents/LearnMore/LearnMore'
import Slider from 'components/MainComponents/Slider/Slider'

const Main = () => {
    return (
        <main>
            <LearnMore />
            <Slider />
            <GamesSection />
            <ForParents />
        </main>
    )
}
export default Main
