const terminalData = {
  currentLang: 'en', // 預設語言

  en: {
    help: `Available commands:
  <span class="clickable" onclick="runCmd('help')">help</span>      - Display all available commands
  <span class="clickable" onclick="runCmd('lang')">lang</span>      - Switch language ( -en/ -tw)
  <span class="clickable" onclick="runCmd('about')">about</span>     - Short self-introduction
  <span class="clickable" onclick="runCmd('story')">story</span>     - My life quick review
  <span class="clickable" onclick="runCmd('skills')">skills</span>    - Professional skills
  <span class="clickable" onclick="runCmd('projects')">projects</span>  - Completed projects
  <span class="clickable" onclick="runCmd('contact')">contact</span>   - Contact information
  <span class="clickable" onclick="runCmd('connect')">connect</span>   - Mystery links
  <span class="clickable" onclick="runCmd('resume')">resume</span>    - Download resume
  <span class="clickable" onclick="runCmd('fetch')">fetch</span>     - System information
  <span class="clickable" onclick="runCmd('clear')">clear</span>     - Clear terminal output
  <span class="clickable" onclick="runCmd('sudo')">sudo</span>      - ???`,
    
    about: `"I am an unusual person who always manages to surprise others at unexpected moments."\n\n"Life is fantastic. You're still young, and the best is yet to come. So go and live a life you'll remember."`,
    
    projects: `Projects are currently under construction.`,
    
    skills: `=== SKILLS ===\n- Holder of 3 electrical engineering-related technician certifications issued in Taiwan.\n\n= Also Skills =\n- Master of Ctrl+C / Ctrl+V advanced data integration technologies\n- Capable of unleashing 1000% productivity 10 minutes before a deadline\n- Familiar with cross-platform video content analysis (YouTube / TikTok / Instagram)`,
    
    fetch: `<img src="visual_identity.svg" alt="Visual identity" style="max-width: 100%; height: auto;" />

OS: Retrofit OS x64
Host: Human Being 1.0
Kernel: Brain 2.0
Uptime: 18 years
Height: 1.8m
Weight: 60kg
CPU: AMD Brain Process Unit @ 1THz (Needs sex)
GPU: Retina Display
Memory: 3 Brain Cells left`,
    
    story: `[AI translate]\n\nI was born in 2008.
Before that, I was just a quiet little life in my mother's womb, waiting to come into this world.
I can't really remember many things from my childhood.
But I remember in 2011, as a three-year-old, I lived with my grandparents in the countryside of Taoyuan. There was sunshine, the smell of dirt, paths along the fields, and a kind of tranquility that is hard to find nowadays.
In 2012, I was four.
That year, I received my first philosophical advice from my grandma: "A calm heart keeps you cool."
Looking back now, I guess that's why we should respect our elders.
In 2013, I moved to Taipei.
From the countryside to the city, my world suddenly became very big, very fast, and very lively.
In 2014, I attended kindergarten.
I would wet my sleeping bag, play with cheap plastic toys that kept me happy all day, and I learned how to blow bubble gum bubbles.
Looking back today, those seemingly silly little things are actually sparkling memories.

In 2015, I started elementary school.
I didn't like doing homework; I loved running around and playing tag.
In 2016, I began learning basic knowledge that seemed boring then, but became crucial as I grew up.
Almost every summer during elementary school, I attended church summer camps.
They weren't just activities; it was where I began connecting with the world and learning about human warmth.
In 2017, I enjoyed playing sports, catching small animals to observe, and making crafts.
In 2018, I started getting into computers, playing with Beyblades, and attended remedial English classes at school.
That was when I started gaining an interest in "languages".
In 2019, I started reading novels, playing with Rubik's cubes, and researching computers.
This was the first time I traveled abroad with my whole family.
It was also the year I first encountered the confusion and curiosity of adolescence.
I began having more questions about the world and started talking to myself.
In 2020, the pandemic changed the whole world.
The graduation trip was canceled, but I still remember the happy days spent with my classmates.
That year, I felt for the first time: the world really can change suddenly.

During junior high, I spent almost every weekend learning baking and helping out at the church.
I slowly learned patience and began to understand that many things take time to ferment.
In 2021, I officially entered junior high school.
I started learning to socialize and remembered a quote I really liked:
"If the flower blooms, the butterfly will come."
The same year, I was forced to attend remedial math classes. I hated that feeling.
In 2022, classes moved online due to the pandemic.
I played a lot of games, watched lots of anime and movies, and consequently learned a massive amount about computers.
But at the same time, I felt a strange distance growing between people.
Technology connected the world together, but it also made many people increasingly lonely.
In 2023, I faced the first major entrance exam of my life. I scored in the 90-95th percentile (PR90~95).
After the exams, I went on an overnight trip with friends. It was a very free and youthful time.
There was also the graduation trip, which became an unforgettable memory.

In 2024, I entered high school.
This year, I learned the most important lesson in high school:
W=F⋅S
But deeper than physics, I learned about frustration.
For the first time, I hit a real wall in my studies, especially in electronics-related subjects.
The feeling of not being able to learn easily made me very uncomfortable.
Meanwhile, I joined clubs and met many interesting people.
But since we were allowed to use phones in class, I threw a lot of time into games and the digital world.
I started becoming bad at talking to people.
My social skills declined, and my expression became clunky.
Combined with spending long hours fixing old computers and staying up late gaming, my health gradually worsened.
However, precisely because of this, I began to realize the importance of "digital well-being".
I started to wonder: how should humans coexist with technology?
Although I was a bit strange back then, I still tried hard to participate in competitions and activities, attempting to maintain my balance.
In 2025, my sophomore year of high school started to be different.
I slowly found a balance between gaming, socializing, and studying.
This year I joined an independent study program and started trying to develop games myself.
Paradoxically, to research how to reduce digital dependence, I ended up spending even more time in the digital world.

In 2026, I turn eighteen.
I completed a specialized project with my classmates.
During that process, I learned many things that textbooks couldn't teach.
In the same year, I also started preparing for an important exam.
My final score ended up in the PR88 to 92 range.

And I suppose this is the process of human growth,
Even without knowing the answer yet, still being willing to keep going.`,

    resumeHtml: `[ <a href="https://drive.google.com/drive/folders/15CeCyUyakDBjl39IfCphXz3PCbHVTgls?usp=sharing" target="_blank" class="clickable">Download Resume (external)</a> ]\nLast updated: 2026-05-10`,
    contactEmailHtml: `Email:
██╗    ██╗██╗██╗     ███████╗ ██████╗ ███╗   ██╗     
██║    ██║██║██║     ██╔════╝██╔═══██╗████╗  ██║     
██║ █╗ ██║██║██║     ███████╗██║   ██║██╔██╗ ██║     
██║███╗██║██║██║     ╚════██║██║   ██║██║╚██╗██║     
╚███╔███╔╝██║███████╗███████║╚██████╔╝██║ ╚████║██╗  
 ╚══╝╚══╝ ╚═╝╚══════╝╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  
                                                     
██╗     ██╗███╗   ██╗ █████╗ ███████╗ ██████╗ █████╗ 
██║     ██║████╗  ██║██╔══██╗╚════██║██╔════╝██╔══██╗
██║     ██║██╔██╗ ██║╚██████║    ██╔╝███████╗╚██████║
██║     ██║██║╚██╗██║ ╚═══██║   ██╔╝ ██╔═══██╗╚═══██║
███████╗██║██║ ╚████║ █████╔╝   ██║  ╚██████╔╝█████╔╝
╚══════╝╚═╝╚═╝  ╚═══╝ ╚════╝    ╚═╝   ╚═════╝ ╚════╝ 
                                                     
 ██████╗  ██████╗ ███╗   ███╗ █████╗ ██╗██╗          
██╔═══██╗██╔════╝ ████╗ ████║██╔══██╗██║██║          
██║██╗██║██║  ███╗██╔████╔██║███████║██║██║          
██║██║██║██║   ██║██║╚██╔╝██║██╔══██║██║██║          
╚█║████╔╝╚██████╔╝██║ ╚═╝ ██║██║  ██║██║███████╗     
 ╚╝╚═══╝  ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚══════╝     
                                                     
    ██████╗ ██████╗ ███╗   ███╗                      
   ██╔════╝██╔═══██╗████╗ ████║                      
   ██║     ██║   ██║██╔████╔██║                      
   ██║     ██║   ██║██║╚██╔╝██║                      
██╗╚██████╗╚██████╔╝██║ ╚═╝ ██║                      
╚═╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝                      `,
    contactPhoneHtml: `Phone:
     888   888    6        9999  000   888 
 +  8   8 8   8  6        9   9 0  00 8   8
+++  888   888  6666       9999 0 0 0  888 
 +  8   8 8   8 6   6        9  00  0 8   8
     888   888   666        9    000   888 
                                           
                                           
     11   888    6        11  333  5555    
    111  8   8  6        111     3 5       
     11   888  6666       11   33  555     
     11  8   8 6   6      11     3    5    
    11l1  888   666      11l1 333  555     `,
    connectRestricted: `[Limited access] Showing promotion links only:\n`,
    connectPromoHtml: `<a href="https://saily.onelink.me/ymzx/referrals" target="_blank" style="text-decoration:none; color:inherit;" class="clickable" title="Discover">Ç</a> &nbsp;&nbsp; <a href="https://game.erolabsshare.live/app/74ba11ea/Stardom" target="_blank" style="text-decoration:none; color:inherit;" class="clickable" title="Discover">Ç</a> &nbsp;&nbsp; <a href="https://rewards.bing.com/welcome?rh=24D15EF1&ref=rafsrchae" target="_blank" style="text-decoration:none; color:inherit;" class="clickable" title="Discover">Ç</a> &nbsp;&nbsp; <a href="https://www.google.com.tw/books/edition/Love_Before_the_global_shutdown/e3LMEQAAQBAJ" target="_blank" style="text-decoration:none; color:inherit;" class="clickable" title="Discover">Ç</a>`,
    connectAllHtml: `<a href="https://www.facebook.com/lin.ting.wei.218793" target="_blank" style="text-decoration:none; color:inherit;" class="clickable" title="Discover">Ç</a> &nbsp;&nbsp; <a href="https://www.instagram.com/wilsonlin9769/" target="_blank" style="text-decoration:none; color:inherit;" class="clickable" title="Discover">Ç</a> &nbsp;&nbsp; <a href="https://www.youtube.com/@WilsonLinYT" target="_blank" style="text-decoration:none; color:inherit;" class="clickable" title="Discover">Ç</a> &nbsp;&nbsp; <a href="https://github.com/Wilson0LIN" target="_blank" style="text-decoration:none; color:inherit;" class="clickable" title="Discover">Ç</a> &nbsp;&nbsp; <a href="https://wilsonlin.itch.io/" target="_blank" style="text-decoration:none; color:inherit;" class="clickable" title="Discover">Ç</a>\n\n<a href="https://saily.onelink.me/ymzx/referrals" target="_blank" style="text-decoration:none; color:inherit;" class="clickable" title="Discover">Ç</a> &nbsp;&nbsp; <a href="https://game.erolabsshare.live/app/74ba11ea/Stardom" target="_blank" style="text-decoration:none; color:inherit;" class="clickable" title="Discover">Ç</a> &nbsp;&nbsp; <a href="https://rewards.bing.com/welcome?rh=24D15EF1&ref=rafsrchae" target="_blank" style="text-decoration:none; color:inherit;" class="clickable" title="Discover">Ç</a> &nbsp;&nbsp; <a href="https://www.google.com.tw/books/edition/Love_Before_the_global_shutdown/e3LMEQAAQBAJ" target="_blank" style="text-decoration:none; color:inherit;" class="clickable" title="Discover">Ç</a>`,
    
    langSwitched: "Language switched to English.",
    langErr: "Unsupported language! Try ' -en' or ' -tw'.",
    clearConfirm: 'Are you sure you want to clear? [<span class="clickable" onclick="runCmd(\'y\')">y</span>/<span class="clickable" onclick="runCmd(\'n\')">N</span>]',
    clearCancelled: 'Clear cancelled.',
    commandNotFound: 'Command not found: ',
    sudo: 'Nice try! This incident will be reported to Santa Claus.',
    initMsg1: 'Initializing tingwei-terminal...',
    initMsg2: 'System ready - retrofit v1.0.1',
    initMsg3: 'Type <span class="clickable" onclick="runCmd(\'help\')">help</span> to begin.'
  },

  tw: {
    help: `可用指令:
  <span class="clickable" onclick="runCmd('help')">help</span>      - 顯示所有可用指令
  <span class="clickable" onclick="runCmd('lang')">lang</span>      - 切換語言 ( -en/  -tw)
  <span class="clickable" onclick="runCmd('about')">about</span>     - 簡短的自我介紹
  <span class="clickable" onclick="runCmd('story')">story</span>     - 人生快速回顧
  <span class="clickable" onclick="runCmd('skills')">skills</span>    - 專業技能
  <span class="clickable" onclick="runCmd('projects')">projects</span>  - 個人專案
  <span class="clickable" onclick="runCmd('contact')">contact</span>   - 聯絡方式
  <span class="clickable" onclick="runCmd('connect')">connect</span>   - 神秘連結
  <span class="clickable" onclick="runCmd('resume')">resume</span>    - 履歷下載
  <span class="clickable" onclick="runCmd('fetch')">fetch</span>     - 系統資訊
  <span class="clickable" onclick="runCmd('clear')">clear</span>     - 清除終端機畫面
  <span class="clickable" onclick="runCmd('sudo')">sudo</span>      - ???`,
    
    about: `"我是一隻總能在意想不到的時刻，帶來驚喜的怪人。"\n\n"生活真美妙。你還年輕，你知道最美好的尚未到來。活出令人難以忘懷的人生吧。"`,
    
    projects: `專案部分目前仍在建置中`,
    
    skills: `=== 技能 ===\n- 擁有中華民國核發之 3 張電機相關技術士證照\n\n=趣味技能=\n- 精通 Ctrl+C / Ctrl+V 高階資料整合技術\n- 擅長在 Deadline 前 10 分鐘爆發 1000% 生產力\n- 熟悉跨平台影音內容分析（YouTube / TikTok / Instagram）`,
    
    fetch: `<img src="visual_identity.svg" alt="Visual identity" style="max-width: 100%; height: auto;" />

作業系統: Retrofit OS x64
宿主: 人類 1.0
核心: 大腦 2.0
開機時間: 18 年
身高: 1.8公尺
體重: 60公斤
CPU: 超微 大腦處理器 @ 1THz (我肏)
GPU: 視網膜顯示器
記憶體: 剩下 三 個腦細胞`,
    
    story: `我出生於2008年。
在那之前，我還只是媽媽肚子裡一個安靜的小生命，等待著來到這個世界。
小時候的很多事情，我其實已經記不清了。
但我記得，2011年三歲的我，和阿公阿嬤一起住在桃園的鄉間田野。那裡有陽光、泥土味、田邊的小路，還有一種現在很難再找到的寧靜。
2012年，我四歲。
那一年，我從阿嬤那收穫了人生第一句像哲理的話：「心靜自然涼。」
現在回頭看，我想這就是我們要敬老尊賢的原因吧。
2013年，我搬到了臺北生活。
從鄉下到城市，我的世界突然變得很大、很快，也很熱鬧。
2014年，我讀幼兒園。
我會尿睡袋、玩那些廉價卻讓人開心一整天的塑膠玩具，也學會吹出口香糖泡泡。
如今回頭看， 那些看似可笑的小事，其實都閃閃發亮。
 
2015年，我上了小學。
我不愛寫作業，喜歡到處跑、玩鬼抓人。
2016年的我，開始接觸許多當時覺得無聊、長大後才知道很重要的基礎知識。
小學幾乎每個暑假，我都參加教會夏令營。
那不只是活動，而是我開始接觸世界、學習人與人之間溫度的地方。 
2017年，我喜歡打球、捕捉小動物來觀察、做手工藝。
2018年，我開始喜歡玩電腦、打陀螺，這年參加了學校的英語補救教學。
那時候的我，開始對「語言」產生興趣。
2019年，我開始看小說、玩魔術方塊、研究電腦。
這年是我第一次和全家人一起出國旅遊。
也是在這一年，我第一次真正接觸青春期的混亂與好奇。
我開始對世界有更多問題，也開始和自己對話。
2020年，疫情改變了全世界。
畢業旅行沒了，但我依然記得，和同學在一起的日子還是很快樂。
那一年，我第一次感覺到：原來世界真的會突然改變。

國中時期，我幾乎每個假日都跑去學烘焙、去教會幫忙。
我慢慢學會耐心，也開始理解，很多事情其實都需要時間慢慢發酵。
2021年，正式升上國中。
我開始學著社交，也記住一句很喜歡的話：
「花若盛開，蝴蝶自來。」
同年，我被迫參與數學補救教學，好討厭的感覺。
2022年，因為疫情，課程改成線上。
我玩了很多遊戲、看了很多動漫和電影，也因此學到了大量電腦相關知識。
但同時，我也感覺到，人與人之間開始出現一種奇怪的距離感。
科技把世界連在一起，卻也讓很多人越來越孤單。
2023年，我迎來人生第一次大型升學考試。我考到了PR90~95。
考完後，我和朋友一起外宿旅行，那是一段很自由、很青春的時光。
還有畢業旅行，也成了我到現在都忘不了的回憶。

2024年，我進入高中。
這一年，我學到高中最重要的一堂課：
W=F⋅S
但比起物理，我學到更深刻的是挫折。
我第一次在課業上真正撞牆，尤其是電學相關科目。
那種無法輕鬆學會的感覺，讓我很不習慣。
同時，我加入社團、認識很多有趣的人。
但因為高中上課能用手機，我也把大量時間丟進遊戲與數位世界裡。
我開始變得不太會和人說話。
社交能力下降，表達也變得卡頓。
再加上長時間修理舊電腦、熬夜玩遊戲，我的身體狀況也慢慢變差。
可是，也正因為這樣，我開始意識到「數位健康」的重要。
我開始思考：人到底該怎麼和科技共存？
雖然那時候的我有點奇怪，但我仍然努力參加競賽與活動，試著維持自己的平衡。
2025年，高二的生活開始不一樣了。
我慢慢在遊戲、社交與課業之間找到某種平衡。
這一年我參加了自主學習計畫，開始嘗試自己開發遊戲。
矛盾的是，我為了研究如何減少數位依賴，反而花了更多時間待在數位世界裡。

2026年，我十八歲。
我和同學一起完成專題實作計畫。
那段過程中，我學到很多課本教不了的事。
同年，我也開始準備重要考試。
最後成績落在PR88到92。

我想這大概就是人成長的過程，
即使還不知道答案，也願意繼續前進。`,

    resumeHtml: `[ <a href="https://drive.google.com/drive/folders/15CeCyUyakDBjl39IfCphXz3PCbHVTgls?usp=sharing" target="_blank" class="clickable">下載履歷表 (外部)</a> ]\n最後更新: 2026-05-10`,
    contactEmailHtml: `電子郵件:
██╗    ██╗██╗██╗     ███████╗ ██████╗ ███╗   ██╗     
██║    ██║██║██║     ██╔════╝██╔═══██╗████╗  ██║     
██║ █╗ ██║██║██║     ███████╗██║   ██║██╔██╗ ██║     
██║███╗██║██║██║     ╚════██║██║   ██║██║╚██╗██║     
╚███╔███╔╝██║███████╗███████║╚██████╔╝██║ ╚████║██╗  
 ╚══╝╚══╝ ╚═╝╚══════╝╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  
                             
██╗     ██╗███╗   ██╗ █████╗ ███████╗ ██████╗ █████╗ 
██║     ██║████╗  ██║██╔══██╗╚════██║██╔════╝██╔══██╗
██║     ██║██╔██╗ ██║╚██████║    ██╔╝███████╗╚██████║
██║     ██║██║╚██╗██║ ╚═══██║   ██╔╝ ██╔═══██╗╚═══██║
███████╗██║██║ ╚████║ █████╔╝   ██║  ╚██████╔╝█████╔╝
╚══════╝╚═╝╚═╝  ╚═══╝ ╚════╝    ╚═╝   ╚═════╝ ╚════╝ 
                                       
 ██████╗  ██████╗ ███╗   ███╗ █████╗ ██╗██╗          
██╔═══██╗██╔════╝ ████╗ ████║██╔══██╗██║██║          
██║██╗██║██║  ███╗██╔████╔██║███████║██║██║          
██║██║██║██║   ██║██║╚██╔╝██║██╔══██║██║██║          
╚█║████╔╝╚██████╔╝██║ ╚═╝ ██║██║  ██║██║███████╗     
 ╚╝╚═══╝  ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚══════╝     
                                       
    ██████╗ ██████╗ ███╗   ███╗                      
   ██╔════╝██╔═══██╗████╗ ████║                      
   ██║     ██║   ██║██╔████╔██║                      
   ██║     ██║   ██║██║╚██╔╝██║                      
██╗╚██████╗╚██████╔╝██║ ╚═╝ ██║                      
╚═╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝                      `,
    contactPhoneHtml: `聯絡電話:

     888   888    6        9999  000   888 
 +  8   8 8   8  6        9   9 0  00 8   8
+++  888   888  6666       9999 0 0 0  888 
 +  8   8 8   8 6   6        9  00  0 8   8
     888   888   666        9    000   888 
                                           
                                           
     11   888    6        11  333  5555    
    111  8   8  6        111     3 5       
     11   888  6666       11   33  555     
     11  8   8 6   6      11     3    5    
    11l1  888   666      11l1 333  555     `,
    connectRestricted: `[存取權受限] 僅顯示推廣連結：\n`,
    connectPromoHtml: `<a href="https://saily.onelink.me/ymzx/referrals" target="_blank" style="text-decoration:none; color:inherit;" class="clickable" title="Discover">Ç</a> &nbsp;&nbsp; <a href="https://game.erolabsshare.live/app/74ba11ea/Stardom" target="_blank" style="text-decoration:none; color:inherit;" class="clickable" title="Discover">Ç</a> &nbsp;&nbsp; <a href="https://rewards.bing.com/welcome?rh=24D15EF1&ref=rafsrchae" target="_blank" style="text-decoration:none; color:inherit;" class="clickable" title="Discover">Ç</a> &nbsp;&nbsp; <a href="https://www.google.com.tw/books/edition/Love_Before_the_global_shutdown/e3LMEQAAQBAJ" target="_blank" style="text-decoration:none; color:inherit;" class="clickable" title="Discover">Ç</a>`,
    connectAllHtml: `<a href="https://www.facebook.com/lin.ting.wei.218793" target="_blank" style="text-decoration:none; color:inherit;" class="clickable" title="Discover">Ç</a> &nbsp;&nbsp; <a href="https://www.instagram.com/wilsonlin9769/" target="_blank" style="text-decoration:none; color:inherit;" class="clickable" title="Discover">Ç</a> &nbsp;&nbsp; <a href="https://www.youtube.com/@WilsonLinYT" target="_blank" style="text-decoration:none; color:inherit;" class="clickable" title="Discover">Ç</a> &nbsp;&nbsp; <a href="https://github.com/Wilson0LIN" target="_blank" style="text-decoration:none; color:inherit;" class="clickable" title="Discover">Ç</a> &nbsp;&nbsp; <a href="https://wilsonlin.itch.io/" target="_blank" style="text-decoration:none; color:inherit;" class="clickable" title="Discover">Ç</a>\n\n<a href="https://saily.onelink.me/ymzx/referrals" target="_blank" style="text-decoration:none; color:inherit;" class="clickable" title="Discover">Ç</a> &nbsp;&nbsp; <a href="https://game.erolabsshare.live/app/74ba11ea/Stardom" target="_blank" style="text-decoration:none; color:inherit;" class="clickable" title="Discover">Ç</a> &nbsp;&nbsp; <a href="https://rewards.bing.com/welcome?rh=24D15EF1&ref=rafsrchae" target="_blank" style="text-decoration:none; color:inherit;" class="clickable" title="Discover">Ç</a> &nbsp;&nbsp; <a href="https://www.google.com.tw/books/edition/Love_Before_the_global_shutdown/e3LMEQAAQBAJ" target="_blank" style="text-decoration:none; color:inherit;" class="clickable" title="Discover">Ç</a>`,
    
    langSwitched: "語言已切換為 [繁體中文]。",
    langErr: "不支援的語言！請試試 '-en' 或 '-tw'。",
    clearConfirm: '您確定要清除畫面嗎？ [<span class="clickable" onclick="runCmd(\'y\')">y</span>/<span class="clickable" onclick="runCmd(\'n\')">N</span>]',
    clearCancelled: '已取消。',
    commandNotFound: '找不到指令: ',
    sudo: '想幹嘛！這起事件將會匯報給聖誕老人 (你拿不到禮物了)。',
    initMsg1: '正在初始化 tingwei-terminal...',
    initMsg2: '系統就緒 - retrofit v1.0.1',
    initMsg3: '輸入 <span class="clickable" onclick="runCmd(\'help\')">help</span> 來開始.'
  }
};
