import Blog from "../../(components)/Blog";
import BlogImage from "../../(components)/BlogImage";
import Button from "../../(components)/Button";
import Content from "../../(components)/Content";
import Headline from "../../(components)/Headline";
import Paragraph from "../../(components)/Paragraph";
import ParagraphGroup from "../../(components)/ParagraphGroup";
import Title from "../../(components)/Title";

export default function Page(){
    return <Blog>
        <Headline>The Best Workout Playlist: These Songs Will Motivate You</Headline>
        <BlogImage src="/blogs/1.jpg" alt="" />
        <Content>
            <Paragraph>Studies have shown that music can boost our enjoyment of exercise by up to 28%, making it a powerful tool in your fitness arsenal. It&#8217;s not just about enjoyment either &ndash; music has been proven to reduce our perception of effort and increase endurance output by as much as 15%. These stats are impressive, but deep down, we all know how much music can truly elevate our workout experience.</Paragraph>
            <Paragraph>Thanks to platforms like Spotify and Apple Music, creating and finding the perfect workout playlist is easier than ever.</Paragraph>
            <Title>Here are some tips to help you create your perfect workout playlist :</Title>
            <ParagraphGroup>
                <Paragraph><strong>1. Structure Your Playlist to Match Your Workout:</strong> Consider the flow of your workout session, from warm-up to cool-down.</Paragraph>
                <Paragraph>Begin with energetic tracks to kickstart your session, matching the tempo to your activity level. Transition to more relaxed tracks for your cool-down phase, allowing your body to gradually return to a resting state.</Paragraph>
            </ParagraphGroup>
            <ParagraphGroup>
                <Paragraph><strong>2. Prepare Your Playlist Ahead of Time:</strong> Avoid the hassle of scrolling through your music library at the gym. Plan and organize your playlist in advance, ensuring it complements the intensity and duration of your workout.</Paragraph>
                <Paragraph>Consider creating multiple playlists to keep your sessions fresh and exciting.</Paragraph>
            </ParagraphGroup>
            <ParagraphGroup>
                <Paragraph><strong>3. Harness the Power of Beats Per Minute (BPM):</strong> BPM can significantly impact your workout intensity.</Paragraph>
                <Paragraph>Aim for around 80 BPM for warm-ups and cool-downs to ease into and out of your session smoothly. Increase the BPM to 115 or higher during your main workout for a boost of energy and motivation.</Paragraph>
            </ParagraphGroup>
            <ParagraphGroup>
                <Paragraph><strong>4. Seek Inspiration from Others:</strong> Draw inspiration from your friends who have created exceptional workout playlists.</Paragraph>
                <Paragraph>Collaborate with friends to create shared playlists that motivate and challenge each other during workouts.</Paragraph>
            </ParagraphGroup>
            <Button href="https://open.spotify.com/playlist/7JlANwtrPepPSkc8dFnRaq?si=j3jWxZ28SYOnm-dwD4qr7A&pi=e-UznKxaa8RT-u&nd=1&dlsi=ee1fc2b214fd40b2">Interested in Checking Out My Workout Playlist?</Button>
        </Content>
    </Blog>
}