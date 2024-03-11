import type { Meta, StoryObj } from "@storybook/react";
import Article, { IArticle } from "@/components/examples/Article";

const meta: Meta<typeof Article> = {
  title: "Page Examples/Article",
  component: Article,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Article>;

export default meta;
type Story = StoryObj<IArticle>;

export const Article020224WithProposedMarkupAndStructure: Story = {
  args: {
    html: `
  <header>
    <h1>Great Britain Storms to Team Relay Silver on Day One of the 2024 UCI Cyclo-Cross World Championships</h1>
    <p>Great Britain kicked off the 2024 UCI Cyclo-cross World Championships with impeccable team tactics to see them take a silver medal in the team relay in a nail-biting sprint finish on day one of competition in Tabor.</p>
  </header>
  <section>
    <h2>Opening Strong</h2>
    <p>Zoe Backstedt got the team off to a strong start as the only female rider on lap one. Riding at the back of the pack, she made her way through the boggy 3.5km course with confidence, keeping the bunch in sight before making the first changeover to under-23 national champion Corran Carrick-Anderson.</p>
  </section>
  <section>
    <h2>Building Momentum</h2>
    <p>Carrick-Anderson kicked off lap two with confidence, slowly making his way through, chipping away at the 44 second gap to the leading trio of France, Poland, and Italy. As the gaps between riders increased, Carrick-Anderson stayed focused and on-tactic to handover to junior national champion Cat Ferguson in sixth position.</p>
  </section>
  <section>
    <h2>The Young Talent Shines</h2>
    <p>The young talent Ferguson attacked the course, displaying her usual skill and tenacity to close down the gap to the Slovakian rider. Working hard and fast, Ferguson became embroiled in a four-way battle for fifth position with Belgium, Slovakia, and Italy before delivering a strong handover to debutant Oscar Amey.</p>
  </section>
  <section>
    <h2>A Stellar Debut</h2>
    <p>In his first cyclo-cross world championships, the 16-year-old delivered a blistering ride, storming through the course with panache to close the gap to 15 seconds off the podium positions. A fantastic pace saw him move quickly into third, then into second place before overtaking French rider Lauriane Duraffourg and moving the focus to increasing his lead as much as possible.</p>
  </section>
  <section>
    <h2>The Battle for Lead</h2>
    <p>With Great Britain’s elite riders held back to the final two laps, it was all to play for and experienced competitor Kay took on the challenge with gusto. Kay tackled the increasingly slippery course with experienced handling, managing to keep the French rider at bay for the majority of the lap. Slowing slightly heading into the second pit stop, Helene Clauzel took her opportunity and managed to overtake Kay, moving back into the lead ahead of the final handover.</p>
  </section>
  <section>
    <h2>The Final Push</h2>
    <p>Picking up the final lap, Cameron Mason showed his signature speed to turn on the gas and, take to the course at an explosive pace, in an attempt to close France’s seven second lead.</p>
    <p>As he made his way around the course, Mason consistently gained on the French junior rider Aubin Sparfel, chipping away at the marginal lead to bring the British team closer to the world title. Heading into pit one, Mason was on Sparfel’s heels and ready to catch but lost time coming out of the plank obstacle to give Sparfel a slight reprieve. Mason continued to attack as the race ran on but couldn’t quite close the gap and take the lead as Sparfel showed no signs of slowing.</p>
    <p>With 150m to go heading into the final straight, Mason took a different line to pressure his opponent, putting him neck-and-neck to set the riders up for a sensational sprint finish. As both riders went full gas over the finish line, Sparfel took the win by the smallest of margins, throwing his bike inches ahead of Mason to take the title, with Great Britain taking the silver medal for the second year running.</p>
  </section>
  <footer>
    <h2>Rider Reactions</h2>
    <figure>
      <blockquote>
        <p>“It was really close in the end to come down to a sprint. I still think I did everything I could in the final sprint, it wasn’t the perfect lap but that’s kind of how it is in the relay, it’s hard to get the effort out but it’s a nice place to be ready for Sunday. It’s going to be a muddy, slow one on Sunday so maybe less tactical which should be a good one for me so I’m excited to give it a good shot.”</p>
      </blockquote>
      <figcaption>— Cam Mason</figcaption>
    </figure>
    <figure>
      <blockquote>
        <p>“The team relay went well, it’s always a tough one because you have to go full gas and on a course like this you’re on the limit and it’s an ice rink so you make mistakes. But I think we did a good team performance.”</p>
      </blockquote>
      <figcaption>— Anna Kay</figcaption>
    </figure>
  </footer>
  <section>
    <h2>Looking Ahead</h2>
    <p>The action will continue tomorrow with Cat Ferguson, Imogen Wolff, and Alice Colling in the junior women’s races, Dan Barnes and Corran Carrick-Anderson for the under-23 men, and Anna Kay contesting the elite women’s title.</p>
    <p>The junior women’s race kicks off at 10am GMT on Discovery+, with the following events streamed on BBC iPlayer and online. You can also follow updates on the British Cycling social media channels.</p>
  </section>
`,
  },
};

export const Article020224WithProposedMarkup: Story = {
  args: {
    html: `<header><h1>Great Britain Storms to Team Relay Silver on Day One of the 2024 UCI Cyclo-Cross World Championships</h1>
<p>Great Britain kicked off the 2024 UCI Cyclo-cross World Championships with impeccable team tactics to see them take a silver medal in the team relay in a nail-biting sprint finish on day one of competition in Tabor.</p>
</header>
<p>Zoe Backstedt got the team off to a strong start as the only female rider on lap one. Riding at the back of the pack, she made her way through the boggy 3.5km course with confidence, keeping the bunch in sight before making the first changeover to under-23 national champion Corran Carrick-Anderson.</p>
<p>Carrick-Anderson kicked off lap two with confidence, slowly making his way through, chipping away at the 44 second gap to the leading trio of France, Poland and Italy. As the gaps between riders increased, Carrick-Anderson stayed focused and on-tactic to handover to junior national champion Cat Ferguson in sixth position.</p>
<p>The young talent Ferguson attacked the course, displaying her usual skill and tenacity to close down the gap to the Slovakian rider. Working hard and fast, Ferguson became embroiled in a four-way battle for fifth position with Belgium, Slovakia and Italy before delivering a strong handover to debutant Oscar Amey.</p>
<p>In his first cyclo-cross world championships, the 16-year-old delivered a blistering ride, storming through the course with panache to close the gap to 15 seconds off the podium positions. A fantastic pace saw him move quickly into third, then into second place before overtaking French rider Lauriane Duraffourg and moving the focus to increasing his lead as much as possible. Amey took on the obstacles with ease, moving further away from the French before passing over to elite national champion Anna Kay with a 14 second lead. &nbsp;</p>
<p>With Great Britain’s elite riders held back to the final two laps, it was all to play for and experienced competitor Kay took on the challenge with gusto. Kay tackled the increasingly slippery course with experienced handling, managing to keep the French rider at bay for the majority of the lap. Slowing slightly heading into the second pit stop, Helene Clauzel took her opportunity and managed to overtake Kay, moving back into the lead ahead of the final handover. &nbsp;</p>
<p>Picking up the final lap, Cameron Mason showed his signature speed to turn on the gas and, take to the course at an explosive pace, in an attempt to close France’s seven second lead.</p>
<p>As he made his way around the course, Mason consistently gained on the French junior rider Aubin Sparfel, chipping away at the marginal lead to bring the British team closer to the world title.&nbsp;</p>
<p>Heading into pit one, Mason was on Sparfel’s heels and ready to catch but lost time coming out of the plank obstacle to give Sparfel a slight reprieve. Mason continued to attack as the race ran on but couldn’t quite close the gap and take the lead as Sparfel showed no signs of slowing.</p>
<p>With 150m to go heading into the final straight, Mason took a different line to pressure his opponent, putting him neck-and-neck to set the riders up for a sensational sprint finish. As both riders went full gas over the finish line, Sparfel took the win by the smallest of margins, throwing his bike inches ahead of Mason to take the title, with Great Britain taking the silver medal for the second year running.</p>
<p>Cam Mason said of the event:</p>
<blockquote>“It was really close in the end to come down to a sprint. I still think I did everything I could in the final sprint, it wasn’t the perfect lap but that’s kind of how it is in the relay, it’s hard to get the effort out but it’s a nice place to be ready for Sunday. It’s going to be a muddy, slow one on Sunday so maybe less tactical which should be a good one for me so I’m excited to give it a good shot.”</blockquote>
<p>Anna Kay added:</p>
<blockquote>“The team relay went well, it’s always a tough one because you have to go full gas and on a course like this you’re on the limit and it’s an ice rink so you make mistakes. But I think we did a good team performance.”</blockquote>
<p>The action will continue tomorrow with Cat Ferugson, Imogen Wolff and Alice Colling in the junior women’s races, Dan Barnes and Corran Carrick-Anderson for the under-23 men and Anna Kay contesting the elite women’s title.</p>
<p>The junior women’s race kicks off at 10am GMT on Discovery+, with the following events streamed on BBC iPlayer and online. You can also follow updates on the British Cycling social media channels.</p>`,
  },
};

export const Article020224WithCurrentMarkup: Story = {
  args: {
    html: `<h1>Great Britain Storms to Team Relay Silver on Day One of the 2024 UCI Cyclo-Cross World Championships</h1>
<h2>Great Britain kicked off the 2024 UCI Cyclo-cross World Championships with impeccable team tactics to see them take a silver medal in the team relay in a nail-biting sprint finish on day one of competition in Tabor.</h2>
<p>Zoe Backstedt got the team off to a strong start as the only female rider on lap one. Riding at the back of the pack, she made her way through the boggy 3.5km course with confidence, keeping the bunch in sight before making the first changeover to under-23 national champion Corran Carrick-Anderson.</p>
<p>Carrick-Anderson kicked off lap two with confidence, slowly making his way through, chipping away at the 44 second gap to the leading trio of France, Poland and Italy. As the gaps between riders increased, Carrick-Anderson stayed focused and on-tactic to handover to junior national champion Cat Ferguson in sixth position.</p>
<p>The young talent Ferguson attacked the course, displaying her usual skill and tenacity to close down the gap to the Slovakian rider. Working hard and fast, Ferguson became embroiled in a four-way battle for fifth position with Belgium, Slovakia and Italy before delivering a strong handover to debutant Oscar Amey.</p>
<p>In his first cyclo-cross world championships, the 16-year-old delivered a blistering ride, storming through the course with panache to close the gap to 15 seconds off the podium positions. A fantastic pace saw him move quickly into third, then into second place before overtaking French rider Lauriane Duraffourg and moving the focus to increasing his lead as much as possible. Amey took on the obstacles with ease, moving further away from the French before passing over to elite national champion Anna Kay with a 14 second lead. &nbsp;</p>
<p>With Great Britain’s elite riders held back to the final two laps, it was all to play for and experienced competitor Kay took on the challenge with gusto. Kay tackled the increasingly slippery course with experienced handling, managing to keep the French rider at bay for the majority of the lap. Slowing slightly heading into the second pit stop, Helene Clauzel took her opportunity and managed to overtake Kay, moving back into the lead ahead of the final handover. &nbsp;</p>
<p>Picking up the final lap, Cameron Mason showed his signature speed to turn on the gas and, take to the course at an explosive pace, in an attempt to close France’s seven second lead.</p>
<p>As he made his way around the course, Mason consistently gained on the French junior rider Aubin Sparfel, chipping away at the marginal lead to bring the British team closer to the world title.&nbsp;</p>
<p>Heading into pit one, Mason was on Sparfel’s heels and ready to catch but lost time coming out of the plank obstacle to give Sparfel a slight reprieve. Mason continued to attack as the race ran on but couldn’t quite close the gap and take the lead as Sparfel showed no signs of slowing.</p>
<p>With 150m to go heading into the final straight, Mason took a different line to pressure his opponent, putting him neck-and-neck to set the riders up for a sensational sprint finish. As both riders went full gas over the finish line, Sparfel took the win by the smallest of margins, throwing his bike inches ahead of Mason to take the title, with Great Britain taking the silver medal for the second year running.</p>
<p>Cam Mason said of the event:</p>
<p>“It was really close in the end to come down to a sprint. I still think I did everything I could in the final sprint, it wasn’t the perfect lap but that’s kind of how it is in the relay, it’s hard to get the effort out but it’s a nice place to be ready for Sunday. It’s going to be a muddy, slow one on Sunday so maybe less tactical which should be a good one for me so I’m excited to give it a good shot.”</p>
<p>Anna Kay added:</p>
<p>“The team relay went well, it’s always a tough one because you have to go full gas and on a course like this you’re on the limit and it’s an ice rink so you make mistakes. But I think we did a good team performance.”</p>
<p>The action will continue tomorrow with Cat Ferugson, Imogen Wolff and Alice Colling in the junior women’s races, Dan Barnes and Corran Carrick-Anderson for the under-23 men and Anna Kay contesting the elite women’s title.</p>
<p>The junior women’s race kicks off at 10am GMT on Discovery+, with the following events streamed on BBC iPlayer and online. You can also follow updates on the British Cycling social media channels.</p>`,
  },
};
