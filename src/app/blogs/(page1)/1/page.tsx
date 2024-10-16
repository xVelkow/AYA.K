import Blog from "../../(components)/Blog";
import Headline from "../../(components)/Headline";
import Content from "../../(components)/Content";
import SubTitle from "../../(components)/SubTitle";
import BlogImage from "../../(components)/BlogImage";
import Paragraph from "../../(components)/Paragraph";
import ParagraphGroup from "../../(components)/ParagraphGroup";
import Button from "../../(components)/Button";

export default function Page() {
    return <Blog>
        <Headline>Why Training is Important for Women&#8217;s Health</Headline>
        <BlogImage src="/blogs/1.jpg" alt="im" />
        <Content>
            <Paragraph>Fitness is often seen as a form of self-care, but let&#8217;s be honest—self-care can sometimes feel like a luxury, squeezed in when time allows. Despite its importance, putting self-care into action can be challenging. When we treat it like just another item on our to-do list, we risk missing its true value.</Paragraph>
            <Paragraph>Exercise goes beyond enhancing appearances; it nurtures physical and mental well-being. While beneficial for everyone, women especially reap numerous health rewards:</Paragraph>
            <ParagraphGroup>
                <Paragraph><strong>- Menstruation:</strong> Exercise can alleviate menstrual symptoms such as cramps and mood swings.</Paragraph>
                <Paragraph><strong>- Hormonal Balance:</strong> Staying active helps regulate hormones, crucial for overall well-being.</Paragraph>
                <Paragraph><strong>- Menopause Management:</strong> While not a cure-all, exercise can assist in managing weight gain and stress.</Paragraph>
                <Paragraph><strong>- Endometriosis Relief:</strong> Exercise releases anti-inflammatory markers, potentially easing symptoms.</Paragraph>
                <Paragraph><strong>- Pregnancy Preparation:</strong> Gentle exercises during pregnancy ease discomfort and prepare the body for childbirth.</Paragraph>
                <Paragraph><strong>- Diabetes Management:</strong> Regular exercise, coupled with a balanced diet, aids in stabilizing blood sugar levels.</Paragraph>
                <Paragraph><strong>- Pain Alleviation:</strong> Strength training can ease aches and promote overall comfort.</Paragraph>
                <Paragraph><strong>- Blood Pressure Control:</strong> Exercise strengthens the heart and enhances circulation, crucial for managing blood pressure.</Paragraph>
            </ParagraphGroup>
            <Paragraph>These insights highlight a simple truth: exercise is fundamental for women&#8221;s health.</Paragraph>
            <Paragraph>I encourage you to honor and care for your body, treating it with the same dedication you give other aspects of your life. Exercise isn&#8217;t just self-care; it&#8217;s an essential component of a balanced lifestyle.</Paragraph>
            <SubTitle>&#8220;I really don&#8217;t have time to workout.&#8221;</SubTitle>
            <Paragraph>I understand finding time for exercise can seem daunting. However, prioritizing your well-being amidst life&#8217;s demands is crucial. Whether it&#8217;s an hour daily or just 15 minutes every other day, making a commitment to yourself is vital. Research indicates that scheduling and forming healthy habits can reduce stress and enhance mental well-being. By prioritizing exercise in your schedule, you increase the likelihood of reaping its benefits.</Paragraph>
            <SubTitle>&#8220;But, I don&#8217;t know where to start?&#8221;</SubTitle>
            <Paragraph>Here is where I come in. As a certified personal trainer and Nutrition specialist, I offer online coaching programs that integrate both physical training and nutrition.</Paragraph>
            <Paragraph><strong>My goal is to help you achieve your goals quickly and healthily.</strong></Paragraph>
            <Button href="/services">Choose Your Plan NOW!</Button>
        </Content>
    </Blog>
}