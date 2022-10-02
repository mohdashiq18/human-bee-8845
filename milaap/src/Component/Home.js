import React, { useState } from "react"
import './Home.css'
import { FaSearch ,FaPhone,FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram,FaYoutube} from 'react-icons/fa'
const Home=()=>
{
    const [count,setCount]=useState(0)
    const userData=[{
        img:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_100,w_100/v1598250884/production/testimonials/user-29_1598250882.jpg",
        name:"Pushpa Aman Singh",
        dis:"The best news for fundraising in India! Will surely promote this in our network. Anoj Viswanathan, what a fabulous Independence Day gift and perfect timing for #GivingTuesdayIndia #Daan Utsav campaigns!"
    },

   { img:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_42,w_42/v1599681095/production/testimonials/user-37_1599681093.jpg",
    name:"Abhishek Gupta",
    dis:"When you know you've been a part of something so big that it has changed someone's life. I urge you all to contribute to such organisation's campaigns. The amount doesn't matter. Your effort matters. You might end up saving someone's life. Milaap thank you for delivering this news"
},
{ img:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_42,w_42/v1594102144/production/testimonials/user__1__1594102143.jpg",
name:"Bruised Soul",
dis:"@milaapdotorg Thank you for facilitating me in helping my friend who we lost recently in a tragedy. Best wishes for all the future good you people are putting in together for the society."
}]
    return (
        <>
        <div id="div">
            
            <div id="get">
            <h4>Get started with Milaap360 and win big this Daan Utsav!</h4>	
            </div>
            <div id="content">
           <h2>Milaap</h2> 
           <h3>Free Crowdfunding for India</h3>
           <p>Raise funds online for medical emergencies and social causes</p>
           <h4>Start a fundraiser - it's FREE</h4>
           <div id="data">
            <div>
                <h3>702,000+
             </h3>
             <h3>
             Fundraisers
             </h3>
            </div>
            <div>
            <h3>702,000+
             </h3>
             <h3>
             Fundraisers
             </h3>
            </div>
            <div>
            <h3>702,000+
             </h3>
             <h3>
             Fundraisers
             </h3>
            </div>
           </div>
            </div>
            <div id="parsent">
                <h4>Our crowdfunding platform charges NO fees</h4>
                <img src="https://assets.milaap.org/assets/home/diamond-9ce851717cc50c7de40ec2977af60e21c799ad40001782db3fa136582b0e4ff5.png"/>
                <span id="st">0%</span>
            </div>
            

           </div>
           <div id="sec">
                <h1>Thousands are fundraising online on Milaap</h1>
                <div id="dimond">
                    <div id="fist"></div>
                    <div id="sec2"></div>
                    <div id="tri"></div>
                </div>
                <div id="input">
                    <input type="search" placeholder="Search by fundraiser name, title, location, cause or other keywords" />
                 
                 <FaSearch className="search"/>
                
                </div>
               <div id="material">
                <div id="profits">
                    <img src="https://cimages.milaap.org/milaap/image/upload/v1662362882/verloop_template/black_res.png"/>
                    <p>Non-profits</p>
                </div>
                <div id="medical">
                    <img src="https://assets.milaap.org/assets/home/medical-icon-22eba5bcdf629bb6e4244cdaab2d40c12e2e5fa63b83d27654423737ef4319ca.png"/>
               <p>Medical</p>
                </div>
                <div id="memori">
                    <img src="https://assets.milaap.org/assets/home/memorial-icon-d649fd768074bb5124e32420e406bb00b1524ee5d277747db46964e82ad914bb.png"/>
                <p>Memorial</p>
                </div>
                <div id="other">
                    <img src="https://assets.milaap.org/assets/home/all-icon-c540de74d815e7275a4bbebda41374b9fc528ba1a5791d71cd28c73ab27fdcd7.png"/>
                <p>15 others</p>
                </div>
               </div>
               </div>
           
            <div id="news">
                <div>
                   <div>
                   <img src="https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1661095595/production/images/campaign/553835/nuvjufeu6mct6jcba4ie_1661095598.jpg"/>
                   </div>
                    <div id="p"><p>Aravind (TR) Srinivasan Birthday Fundraiser For Nellai Cancer Hospital</p></div>
                    <div id="cr">
                        <div id="Rs">
                            <span id="ps">19%</span>
                            <p><span>Raised</span><br/>
                            Rs.9,37,873</p>
                        </div>
                        <div id="crt">
                        <p> Created By<br/>
                        Tharuvai A...
                        </p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://cimages.milaap.org/milaap/image/upload/c_fill,h_198,w_264/v1663660274/production/images/campaign/568791/IMG-20220919-WA0022_pfkowf_1663661020.jpg"/>
                    <div id="p"><p>
Save GauMata from Lumpi Skin Disease 🙏</p></div>
                    <div id="cr">
                        <div id="Rs">
                            <span id="ps">19%</span>
                            <p><span>Raised</span><br/>
                            Rs.9,37,873</p>
                        </div>
                        <div id="crt">
                        <p> Created By<br/>
                        Tharuvai A...
                        </p>
                        </div>
                    </div>

                </div>
                <div>
                    <img src="https://cimages.milaap.org/milaap/image/upload/c_fill,h_198,w_264/v1662057856/production/images/campaign/560210/WhatsApp_Image_2022-08-23_at_11.09.32_PM_euhf9j_1662058667.jpg"/>
                    <div id="p"><p>Support Poor and Needy Children for Education</p></div>
                    <div id="cr">
                        <div id="Rs">
                            <span id="ps">19%</span>
                            <p><span>Raised</span><br/>
                            Rs.9,37,873</p>
                        </div>
                        <div id="crt">
                        <p> Created By<br/>
                        Tharuvai A...
                        </p>
                        </div>
                    </div>
                </div>


                <div>
                   <div>
                   <img src="https://cimages.milaap.org/milaap/image/upload/c_fill,h_198,w_264/v1663089110/production/images/campaign/565577/IMG_2697_mamr67_1663092105.jpg"/>
                   </div>
                    <div id="p"><p>Sponsor girls education at Ikhvelos in rural communities of Rajasthan
</p></div>
                    <div id="cr">
                        <div id="Rs">
                            <span id="ps">19%</span>
                            <p><span>Raised</span><br/>
                            Rs.9,37,873</p>
                        </div>
                        <div id="crt">
                        <p> Created By<br/>
                        Tharuvai A...
                        </p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1660465894/production/images/campaign/549882/WhatsApp_Image_2022-08-14_at_1.06.26_PM_dldjfd_1660465898.jpg"/>
                    <div id="p"><p>Urgent needs support for 1year baby Yuvraj</p></div>
                    <div id="cr">
                        <div id="Rs">
                            <span id="ps">19%</span>
                            <p><span>Raised</span><br/>
                            Rs.9,37,873</p>
                        </div>
                        <div id="crt">
                        <p> Created By<br/>
                        Tharuvai A...
                        </p>
                        </div>
                    </div>

                </div>
                <div>
                    <img src="https://cimages.milaap.org/milaap/image/upload/c_fill,h_198,w_264/v1663164766/production/images/campaign/565902/IMG-20220914-WA0028_ub2hpe_1663164771.jpg"/>
                    <div id="p"><p>Aravind (TR) Srinivasan Birthday Fundraiser For Nellai Cancer Hospital</p></div>
                    <div id="cr">
                        <div id="Rs">
                            <span id="ps">19%</span>
                            <p><span>Raised</span><br/>
                            Rs.9,37,873</p>
                        </div>
                        <div id="crt">
                        <p> Created By<br/>
                        Tharuvai A...
                        </p>
                        </div>
                    </div>
                </div>

            </div>
           
            <div id="ancor"><a href="#">See more fundraisers
             </a></div>
         <div id="big">
            <div>
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIUERISFhISEhISGBoSEREUFRISEhISGBUZGhgUGBgcIS4lHB8rIRkYJjonKzAxNUM1HCQ7QDs1Py80NjQBDAwMEA8QHhISHjQrISQ9NDExNDQ0OjQ0NjQ2PzE0MTQ2NDU0NDE0NDQ2Pz80NDQ2MTQ0NDE2PT00NDQ0MTQxMf/AABEIASgApgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAECAwUHBgj/xABHEAACAQICBQYJCQYGAwEAAAABAgADEQQSBRMhMVEGFCJBYbEHFSMyVHFygaEXMzQ1QlKRk9FTYpKU0tMkY4KiwfAlQ7IW/8QAGgEBAQADAQEAAAAAAAAAAAAAAAECBAUDBv/EACgRAQABAwIFAwUBAAAAAAAAAAABAgMREjEEFCEyURNBoUJSYXGRIv/aAAwDAQACEQMRAD8A87ERI+hImahhalRkRELtVZkpgMgzvTUO67SLEKynba99l5iscqPYZaimonSQuyLnzPkvnCDVvdiLdHftFzHXTHupEo7BTlJAJVH3/ZqIjr/tdfeZdW6JUMVBZEqjaPMdQ6n8GELqhSJbrF+8OG8b+HwMZ14jjv6uMLldEtFRfvD8RxtGsXb0hs2nbuEGV0S7E0zTc03KBwqsyhr5M6hlVv3rEbrjbvmFq6AE5hYbdhHb+h/CEiYmMwyRL8QhSo9JiuemxRwDfaN9vxExaxfvD8R/3qMETExmF0S3WLe2YX4XH/esRrF+8PxHXuhcrolzjKlOoSuWqHNM33hGysT75Rti5zsS+TP9nNbNlvuvYE24QmYUiUVgdxv1SsKREQERECXhtJVKVGslPovUKPSqi16Lq3TYAjbnUKvukypp9jUdlSrSR2sqUauR6dLmtShlRrbwz6wdWYe+QMJgqlW+QKcpQPmbKEV83lG2eYuXpHquuw3lamBdQ9zTzIL1UDNnpHm74gK4y2zFKb2ylhdSCQYa1duzMzq3ZMJpaogCtrWRUo06YWoVbDhMFUwzvRJBCOxcPcDegvt2iRU06zNS6Nc00qLUcNXYVK2TD0qSM7qBmYNTz8CTbtkDH4V6KB2an0/MUM7M3k0ctbLYACol7kbSbXtJeP0YVrPTpujqrimQNbUqU2NFqqh1RCTdVcgoGHRINrGMMZos5ifOWc8oCXdmoaxHIRld+kcO+HpU66bBYMzUKbg22HNxvImBx7IuKqMyGrUvVpDbmXGuzhayCxACLUqsb/uDbMy6GqrVppUakA1RVZFdzU1fOkw7uvQy2zOtrkGxvbYQIPNagq6hgBVFsyAVKhpsUzlGCKSWC7wob4GxYotYmIlPfTYZShpVMlRWp1E1ilaCNQalkwq5LIu1WIN/NUdWaYtNaVfEBFAekiFmyZ8wLlUVW2ADMoVttvtHdFbRNVHSmxpK9RwlFCz5qpOTpJ0LBRrFJzFTsbZ0TMFHClwpSrQqZy60gr1Aazogd0QMgOZVZfOyi7AAkwRTZiYmJ2SNIaV12tZ0qs7CsKJ1oKqa+EXDtnDKSQuQMLEecb9t76bqM1UucR5R67JUp1imIoU6tSi6UqbkHKq6plIFhZza20GO+jqi60s9FFoFxUdnqZV1eqzkZUJPzyWsLnbs40x+DNEU8z02d2qI6IHujUqppv0mWzC4O34EbYTRZnpE/pn0xpbnFNkKVFJrPWUtVvTpq7MSAihQx6fnNcjbYgHKJ1LlPldWNGozCmiNU11ql0a4VFChEQ9eUC9lJBtY6vF4Bk1pzoVps3QzMaopjEvh1dugFPTQjYb7QbAGYsRhXSildsopuQqkiqpBZC6k5kAYZVY3QsNkLFu1MRHsl+NsyhWSsEak2HqUadVEw6KUK6ylTyWVyTc32bW47Jb8pWNVH1TimoqDV6zar1LAVEIAGdVut9mx2FxeR9IaJKvVKEGjRBV6ja9szU6KVarEinlSysDY2vuXMdkwY3RVejTNR1VUVnQnMb5krLSK2tvJYMOKdLshjFNmrHX5TRp7NrHZETIr1KdMnMXxRriph6gCqLlSCXJtcO3GQtG6TajSVMr1MlZMQqmplVmVSrBgQdu1XVttnUGxtKNousBTYrYVMmToYgkZ6LVVNlpnN0EYnJntsDZZlqaExCkAimWLtSCqzteoqlgpYJlUuAMqsVYll2C9wWKbMRMZ3/KHi8Qajq16hCIKYes4qVqlmdszsALnp5R+6qi5mKXVabK5RgA6hSwBvlLKr5T+8AwBHUQRLYbNMRFMRTsREQyIiIGSnXZUrKo6VZDQL5iMtJmU1Fy26WYKFud23r3Xc8r+T8s/ktlMHKQLoU6QI6fQJXp36JI3GYYhjNFMzmYX4ms9Q3qVGqHbta32lVTuHWEQf6RM1XSOIbzq7sLMMpFMowZMjB1y2fo9Hpg2GwWkaIPTpxjEdGZsZXLhzWcuNznLceUWrw++it6xMSu4KHOSaaapCwVrU8rJkIYEMuVmWxvsNtwAlIgiimNohnbHYg3vXqG7K5PRuHTJlZTa6EZE823mC+6VfH4ghwaz2qCzgCmoIKlTlCqMhKkglbEjYbyOZsMUcKtJgi03qth7jNXQutdXw5Zly1MuYq1YhTkY6srl29I8rkW6MZp38QiYjFVnXI9Z3TKaZU5dqHJcMQLsTq02kk9AbZbWr1GFndnGd6m0LcO7ZnYG19p223X22mzr0MJnq6rLVWnTqVFD4mlSp1LV8MlN2qLUOQstSp0WKbQoyqZg0imFWnejUDuKzKCXVmelmq2yorXAAVOkyLe4IJzZQYU3LczERT8IT1HYuWdmziz3t0gaprEHZ99mf1nhslKtR2QU2ctTXKQmVALqmRSSBdiEOUXJ2WHUJSIbOinwyVMTVYVFNRitW5qAhDmJQISLjokqApK2uAAby2tVqOCHqO4LK7KxuC6U9WrntCdH1b7y2ISLdEe0MvOqtlXWHKgKKpWmwyFDTyMCpzrkYrla4ANhaZk0lWzoz1HqqjrVKFhTzuhumZ1XMQGs1t2zqO2RIhJtUT7QXYl3Y5ndmd23ZndizH3kmIiGURiMQREQpERAREQEREBERARlHCIgUy7GG4MMrAfaUMr5T2ZlU+tRKhRwiITEEREKREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERBMCypVVRcm0hPpamJHNOpiK4pJ1m09tg/B7SyDOSW65WhXxNU1TFO0PHeOEjxwk9z8n+H4mPk/wAPxMMPXvfh4bxwkeOEnufk/wAP2zy/KbkW9AZ6YLr1iGM8RehrvHCR44SaSnhKjNlFNr7rWnvNA8gw9MPVuCeqCOKuzs8944SPHCT3Pyf4ftj5P8P2wy9e9+HhvHCTJS0nTY23T2vyf4ftmr03yECUzUpk3XbaDmLsdejWKwIuJWanRmIIY023jZNtI3rVyK6cwREQ9CIiAiIgJR9xlZR9xhJ2ZOQFMNjjedaGFqay9+jwnLfBst8e07atAmVxdWJl57G4WqWBQ7JFOExO+89ZzYxzYwa3lubYnsk3D4MlLOAxO+bzmxjmxg1vPpoSiGzCmt+NpMGH7JtObGObGDW1mojUTZ82Mc2MGtrNRMOJw/QfZ1GbnmxmDGUbU39k90Gp87YkWxdQD7x75tkOwTV48f4yr7R75s6e4SN/g+2V0RENwiIgIiICUfcZWW1TZT6oSdmw8GI/8g067pfTC4ewI3zkPguN8eZ13TOhlxFrm1pXEjTr/wBbINDlWjMFtv2Td8/OzoHb1zQYfkkiOrZ9xvPUoFAA4bIW5o+lHfGkC+Q7JamkCRfIZMuvCAV4Q8kc402vkMs8YfuGTMwlLrwEBRfML2tMksziVziBpOUelnw6qVW5MuwmONbDl2FjlPdNnXpI4syhh2yPiqSimyqLAKdnuhlNVOnGOr500j9Nq+0e+bKnuE1ukR/javtHvmyp7hI6PBdsroiIbpERAS6mjMwVQWZjZVAuSeAEtnsuR2jwqHEMOnUutO/2UBsSO0kH3AQwrr005R8ByPZgGrVNXf7CAMw9bHZfsAPrkupyLw5UjXYn+Kj/AESfp3TAw6AgBqj3FNCdmy13PYLj3kbt48XX01inNzXqDsQ6tR2WW3xhrx6tyM5xD2HI3klQw2JNRKldm4O1Mr/tQTohInB00riVN1xFdTxFRwfgZk8eYz0rE/nVP1jLw5GvzDulxLrCcOoaUxztlXE4hmte2vZdlwu9mA3sB75LY6WAJNXEgDaScSoAA3knPKxng5jeqHZCRKhROGPpnGqSpxWJDKSrA1qlwQbEb+Mt8eYz0vE/nVP1kyvI1+YdyZ1EB1nDTpvF+lYn86p+seOsX6Vifzqn6xleRq8w7lnWXCxnC/HWL9KxP51T9YGnMZ6Vifzqn6xk5GrzDuhsJbVQMpHEWnDfHmM9LxP51T9Y8eYz0rE/nVP1jJyNfmG9xfIXCtiHc1cSCzEkBqOUeroXmZ+RdLL0K1UN1FxTdb9oVV755c6TxF76+tfjrHv3zZ6M5TVqbAVGNWn9oNbOo4q3X6j8Iy9aLF23H+ZQdK6Iq4dgHAKNsSotyjdh4NbqPuvaa+dRr06dekVaz06i7x1qRcMD1HcQZzXGYY06lSmdppsVvxHU3vFj74bFm7qjE7wwREQ9SdD0Iw5rQ9hfxtt+N5zyer5K6QBTUMekl2T95SbkesG/uPZDxv0zNP6Q+WJbnCXvl1Yy8L53ze/zfhNBPd6Y0cuIpgXCum2m++196nsNh+Ank6uh8QpsaTHtWzA9uz/mCzXTpiJ9kCJNo6JxDHKlGozcApJmc8ncaN+ErD/SYenqUfdH9YtCMRXRtYaap06jA28mpDFT2Gw7+qT6lcqtILVstOhVCk1UBaoxdA6JfMA2VSDtGUqdm2+ChoTHocyYasDYi+QMLEWIINwZbV0HjmYs2GrFjvOTgLDduFgBbsh5VVW5qzNUf1BwhptVXXM4psWFRlzM4zKwFQW2sVYhrbb5bWN7TeI+iiUa1RBem7K3OGsdYrOhNmzKEzLsG23nC9xrzoDGei1v4DLfEWM9Gq/wGCqq3V9WP1LOKWj9Ww11YuSrLdGDLZXzJfJltdku19uXYABc2YqhgQlQ08TXdgDqlamQrtlFrsVGUZj2bFb7yzENC4v0er/CZXxJi/R6v8Jgiq3nOv5hJK6OZgM9WgqKgJVKr61ivlGGYNlyncOiN9gdkanR2Rl5xVzkhlY03zLZagCG1O1iSlz123KBtiHQ2KG/D1R/pMp4nxP7Cp/CZU1W/v8AlBESd4nxP7Cp/CZkTQGMYXXDViB1hDI9fWtz9Uf1rYkttHVgbGk4I6spvJ2j9AVHYFxq6fXcjOw4ADd6zCzcpxnL0/J5m5pRvvym3s5jl+Fp5XlORzupbfZM3tZB/wAZZ6+tXp0qZY2WmgsAOoDYFA/AATwGKxBqO9Rt7ktbhwHuFh7oa9mJmqamGIiG0S5HKkEEgjaCDYg8QZbEDf4TlK6gCome321IVj6xuPwkl+U9Kx8nV/Cn/VPLyj7jDyqtUz7Pa8h+UVOvizTWnUU8WFO3wYzpWJQncLziPgu+sDO6sbC8riVxEzMIIpvwMap+EzDGrwOyUGOXgZcsNEIz0HPVI9bC1CNi/GbI41RvvLTpBOBjKTbhpxo+tw+MrzCtw+M3HPl7YOOXgYyx9KGlbR1Y9XxlPFtX7vxm758vAwuPUm1jGo9GGk8W1fu/GbLBUGpo5YdRMm0cQrEgdUri/m39k90ZZU24pnMOL6Q5W0lxVRNXWJDEXAp2/wDuTP8A9QmXo03J6s5VR8CZ4bSg/wAbV9s982NIbBI6nCW4qpmZTsfpGpWILnojzUXYq9vae0yJESOhEREYgiIgIiICUfcZWUfcYSdmx8F31gZ3RzYGcL8F31gZ3OtuMrg1d0oK4g3PkxBxBB+bEwD1tLSRxaESmr33oJRawP8A6xK4egGF7mZlwduswI5xH+WJVsQbfNiXnR/7xlUwNvtGBZr9g8mJTnH+WJmbB7POMsXAn75gSaFiL5bRi/m39k90yKthaY8X82/snugfNekvptX2z3zY09wmu0l9Nq+2e+bGnuEjp8F2yuiIhukREBERASj7jKyj7jCTs2Pgu+sDO7ThPgt+sTOu4cviS7MxWirFFRTYvY2u56/VumTg190p7YqkDlzAt91QXPvC3tGsJ3UWPa2RR33+E5hieWzkkUqepS9lKtZ8l+BGw/8AdssPK5m841z/AK1Pdlky2Y4O5jq6mGq9SU19bk9yyvleNP8ABj/zOYYLS9SslQ6yugU5RlcOTfd5xvfj2HZeapMTi8QzqmLcKliusrmk7A33ZfOOw390ZI4OeuZxh2W1X71P+Fv6pXynFD7mH/M4y+Fxwv5eo1jl6ON39EsSLuN1rHt3XG2YxSxtj5eoSpKsnPDmWwU5j08pXpAXBO28MuTj74drzvwU+pj+krreIYe6/dOGYqri6bBHr1wxUMMuIqOLHqurkXBBB9XCxOHxhX9IxH59b+qMso4GZ6xV8O9q4O4gyzF/Nv7J7pzLkDp2vzpcO9SpVp1Q2XOWdqbqpa4c7QpCkW3Xta22/TcV82/snuhq3bU26tMvmvSX02r7Z75sae4TXaS+m1fbPfNjT3CRv8F2yuiIhukREBERASj7jKyj7jCTs2Pgu+sDO1jC5WZkIGY5nU+ax6yOBnE/Bef/ACDTuw2yuDX3S8JpbwfpVqvUp12oZ2LsjU9cgcm5KEMpAJubG+/ZYbJDHgzf01P5c/3Z0Rqig2vtl/vh7U8TeiMRU518m1XKU58uUm5HNztOz/M/dX8BwlvyZVPTU/lj/dnR7dplbdsLzd7z8Q5v8mL+mJ/Ln+7HyYv6Yn8uf7s6RaLdsYObvefiHNx4Mn9NT+XP92V+TKp6an8sf7s6NbtMraMLzd77viHl+TPI+lg3NU1GrViuQMVCKqkgkKtzYmwuSTu2W239Hi/Mf2T3TJaYMYbU39k90PCquqqdVU5l83aS+m1fbPfNjT3Ca7SX02r7Z75sae4SOlwXbK6IiG4REQEREBKPuMrKPuMJOyf4MPrBp3VN04V4MPrBp3AVwNlpXCq7paPGl9bcXy3m7wQOXbLTVT7svGKHCGOUma2uK4Y5bW6pK50OBjnQ4GBDTnPXaV/xHZJfOhwMc6HAwGEz26e+SJH50OBjnQ4GBk6WbsmHG+Y3snul3OhwMw4ipmR9n2T3QPnPSX02r7Z75sae4TXaS+m1fbPfNjT3CR1OC7ZXREQ3CIiAiIgJR9xlZR9xhJ2bHwXfWBndCg4Thfgu+sDO7SuDV3StyDhGQcJfEIsyDhGQcJfECzIOEZBwl8QLMg4RkHCXxAsyDhMWJUCm/snukiYcX82/snugfNekvptX2z3zY09wmu0l9Nq+2e+bGnuEjp8F2yuiIhukREBERASj7jKyj7jCTs2Hgu+sDO7E2nCfBewGkTO3Y5cyMobKT1yuFV3SkBr7tsrNdomiUUqzZiZsoYzGJUJgGYMQuZbBrS6gMqgE3MDLF5WQ8ajNbK1rb4EuJbTOwC9zL4FCZhxXzb+ye6W10JYWa3ZLsUfJv7J7oHzZpL6bV9s982NPcJrdIm+Nq+2e+bKnuEjqcF2yuiIhuEREBERAQREQNVh8ZUwmJFZOo39c99S8K9MqM9M5uueQxFAOLETVVNFC8rmXuFqirNOzpCeFagDfVmZT4XaX7Mzl3isR4rEPHl7nh035V6P7MwPCtR/Zmcy8ViPFYg5evw6j8rtL9mZj+Vej+zM5l4rEeKxBy9fh09PCzRH/AKzL/ldpfszOW+KxHisQcvX4dPbwsUSb6syBprwqGpSZKaFSwtec/wDFYmSno4AwscNX4W4MMzmo29jczeJuEjYehaSpHSsW9FOCIiHsREQEREBERARaIgMojKIiAyiMoiIDKIyiIgMojKIiAyiLREBERAREQERED//Z"/>
            </div>
            <div>
            <h3>Milaap app - fundraise and donate<br/> seamlessly!</h3>
            <p>Set up and manage your fundraiser or donate to different<br/> causes from your mobile at anytime and from anywhere</p>
            <img src="https://assets.milaap.org/assets/app-qrcode-homepage-prod-0a3005c2633fe1444aff0962fa5f5aabe3827b6fbfc6365035c90624187a860f.png"/>
            <p>Scan the QR Code to download app.</p>
            <div id="app">
                <img src="https://assets.milaap.org/assets/play-store-btn-3cb8952867b0552ef1377bf63004d9d6613fd11da71e8446e7e6be1fd61f3182.png"/>
                <img src="https://assets.milaap.org/assets/app-store-btn-0ae1713b1521ee08942a97e257b38ac5050a6cf70df4084b3f4ab234e60ea51f.png"/>
            </div>
            </div>
         </div>
         <div id="cal">
            <div>
                <h4>Need help to setup your free fundraiser?<span><FaPhone className="phon"/>Request a call</span></h4>
            </div>
         </div>
         <div id="member">
            <div id="sec">
            <h1>What people are saying about Milaap</h1>
            <div id="dimond">
                    <div id="fist"></div>
                    <div id="sec2"></div>
                    <div id="tri"></div>
                </div>
        <div id="user">
        <button id="pri" onClick={()=>setCount(count-1<0? count-count:count-1)}>Privs</button>
           <div id="inuser">
           <div id="secuser">
           
           <img src={userData[count].img}/>
           <p>{userData[count].name}</p>
           </div>
           <h3>{userData[count].dis}</h3>
           </div>
           <button id="next" onClick={()=>setCount(count+1>=userData.length? count-count:count+1)}>Next</button>
           
       </div>
           
            </div>
            <div id="rev">
            <a href="#">​​See all reviews</a>
           </div>
         </div>
         <div id="footer">
            <div id="footera">
                <h4><span>D</span>onate towards</h4>
                <div>
                    <img src="https://assets.milaap.org/assets/home/medical-icon-22eba5bcdf629bb6e4244cdaab2d40c12e2e5fa63b83d27654423737ef4319ca.png"/>
                    <p> Medical</p>
                </div>
                <div>
                    <img src="https://cimages.milaap.org/milaap/image/upload/v1662362882/verloop_template/black_res.png"/>
                    <p> Medical</p>
                </div>
                <div>
                    <img src="https://assets.milaap.org/assets/home/memorial-icon-d649fd768074bb5124e32420e406bb00b1524ee5d277747db46964e82ad914bb.png"/>
                    <p> Medical</p>
                </div>
            </div>
            <div className="mil">
                <h4>Milaap</h4>
                <p><a href="#">About us</a></p>
                <p><a href="#">Press and media</a></p>
                <p><a href="#">Team</a></p>
                <p><a href="#">Careers</a></p>
                <p><a href="#">Contact</a></p>
                <p><a href="#">Board</a></p>
                <p><a href="#">Thank you</a></p>
            </div>
            <div className="mil">
                <h4>Indian office address</h4>
                <p>Milaap Social Ventures India Pvt.<br/> Ltd.<br/>
                ClayWorks Create - <br/>building,11th KM Create<br/> Campus,Arakere Bannerghatta<br/> Rd,
                Bangalore, Karnataka, India<br/> 560076</p><br/><br/>
                <div id="support">
                <h4>Supported by</h4>
                <img src="https://assets.milaap.org/assets/footer/visa-2f0810494a6cf6b3c56bb2c4f3f8f8eb56aa9a7fef7ce3e09221da38b99ae22e.png"/>
                <img src="https://assets.milaap.org/assets/footer/master_card-5dd6fa0fc948f5eb5d4a826caecf0871781948403df78bb4f95c5ff6020b6130.png"/>
                <img src="https://assets.milaap.org/assets/footer/paytm-e4064c63e5406550c7b8c13346a5bfef0b826ca5b1289e2407d4dcb4622d67e3.png"/>
                </div>
            </div>
        <div>
        <div id='fundraiser' className="fun">
            
            <h2>Start a fundraiser</h2>
            </div>
            <div id="lasta">
                <a href="#">Pricing</a>
                <a href="#"> Reviews </a>
                <a href="#">FAQs and tips</a>
                
            </div>
            <div id="lastb">
                <p>Find us on</p>
                <div id="icon">
                <FaFacebookF className="icon"/>
                <FaTwitter className="icon"/>
                <FaLinkedinIn className="icon"/>
                <FaInstagram className="icon"/>
                <FaYoutube className="icon"/>
                </div>
            </div>
         </div>
         <div id="footerb">
            <div>
                <img src="data:image/jpeg;base64,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"/>
            </div>
            <div id="lastc">
                <p>Set up, manage and promote your fundraiser with Milaap app</p><br/>
                <h3>Download Now!</h3><br/>
               <div id="lastk">
               <img className="logo" src="https://assets.milaap.org/assets/play-store-btn-3cb8952867b0552ef1377bf63004d9d6613fd11da71e8446e7e6be1fd61f3182.png"/>
                <img className="logo" src="https://assets.milaap.org/assets/app-store-btn-0ae1713b1521ee08942a97e257b38ac5050a6cf70df4084b3f4ab234e60ea51f.png"/>
               </div>
            </div>
         </div>
         </div>
       <div>
        <div id="copyrt">
            <p>Security & Privacy</p><p> Conditions of use</p><p> © 2010 - 2022 milaap.org. All rights reserved.</p>
        </div>
       </div>
       
           </>
            
      
    )
}
export default Home;