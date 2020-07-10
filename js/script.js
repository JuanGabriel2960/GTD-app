(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded',function(){
        ('Ready!!');
        
        let screenStart = document.querySelector('.start')
        let screenChecklist = document.querySelector('.checklist')
        var x = 0

        class Start{
            constructor(name){
                this.name = name
            }
        }

        class Render{
            renderStart(user){
                // const screenStart = document.querySelector('.start')
                screenStart.innerHTML = `
                <div class="content-start">
            <div class="greet-start">
                <h2 class="fw-600">Hi ${user.name}</h2>
                <p class="fw-400">What do you want to do today?</p>
            </div>
            <div class="svg-start">
                <svg width="134" height="175" viewBox="0 0 134 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M169.446 84.829C169.446 121.953 145.649 153.506 112.506 165.007C99.1653 169.61 84.8925 170.821 70.9692 168.531C69.6479 168.315 68.3359 168.067 67.0333 167.786C65.2683 167.411 63.5242 166.979 61.8009 166.49C26.218 156.455 0.137573 123.694 0.137573 84.829C0.137573 37.979 38.0384 0 84.7919 0C131.545 0 169.446 37.979 169.446 84.829Z" fill="#A1D4F1"/>
                    <path d="M31.77 111.011C31.6209 111.091 31.5096 111.227 31.4605 111.389C31.4113 111.551 31.4284 111.726 31.5078 111.876L63.3356 171.613C63.4154 171.762 63.551 171.873 63.7127 171.923C63.8745 171.972 64.0491 171.955 64.1983 171.875L109.19 147.805C109.339 147.725 109.45 147.589 109.499 147.427C109.549 147.265 109.532 147.09 109.452 146.94L77.6243 87.2032C77.5446 87.0539 77.4089 86.9424 77.2472 86.8931C77.0855 86.8439 76.9109 86.8609 76.7617 86.9405L31.77 111.011Z" fill="#3F3D56"/>
                    <path d="M35.9521 112.757L65.0777 167.421L105.008 146.059L75.8822 91.394L35.9521 112.757ZM33.4218 114.11L33.4274 114.107L33.4212 114.11L33.4218 114.11Z" fill="white"/>
                    <path d="M46.0199 118.766C45.3995 119.098 45.2674 120.067 45.725 120.926C46.1825 121.785 47.0593 122.214 47.6796 121.882L76.9242 106.236C77.5446 105.904 77.6766 104.935 77.2191 104.077C76.7616 103.218 75.8848 102.789 75.2645 103.121L46.0199 118.766Z" fill="#9672FB"/>
                    <path d="M49.6231 125.529C49.0027 125.861 48.8707 126.83 49.3282 127.689C49.7857 128.547 50.6625 128.976 51.2829 128.644L80.5274 112.999C81.1478 112.667 81.2798 111.698 80.8223 110.839C80.3649 109.981 79.488 109.551 78.8677 109.883L49.6231 125.529Z" fill="#9672FB"/>
                    <path d="M53.2262 132.292C52.6058 132.624 52.4737 133.593 52.9313 134.451C53.3888 135.31 54.2656 135.739 54.8859 135.407L84.1305 119.761C84.7509 119.429 84.8829 118.46 84.4254 117.602C83.9679 116.743 83.0911 116.314 82.4707 116.646L53.2262 132.292Z" fill="#9672FB"/>
                    <path d="M56.8293 139.055C56.209 139.386 56.0769 140.355 56.5344 141.214C56.9919 142.073 57.8688 142.502 58.4891 142.17L87.7337 126.524C88.354 126.192 88.4861 125.223 88.0286 124.365C87.5711 123.506 86.6942 123.077 86.0739 123.409L56.8293 139.055Z" fill="#9672FB"/>
                    <path d="M60.4325 145.817C59.8122 146.149 59.6801 147.118 60.1376 147.977C60.5951 148.835 61.472 149.264 62.0923 148.932L91.3369 133.287C91.9573 132.955 92.0893 131.986 91.6318 131.127C91.1743 130.269 90.2975 129.839 89.6771 130.171L60.4325 145.817Z" fill="#9672FB"/>
                    <path d="M66.1115 85.2025L92.6104 86.8239L100.032 64.6469L76.7891 59.7259L66.1115 85.2025Z" fill="#2F2E41"/>
                    <path d="M85.2225 79.5946C91.0757 79.5946 95.8206 74.8399 95.8206 68.9746C95.8206 63.1094 91.0757 58.3546 85.2225 58.3546C79.3693 58.3546 74.6243 63.1094 74.6243 68.9746C74.6243 74.8399 79.3693 79.5946 85.2225 79.5946Z" fill="#FFB8B8"/>
                    <path d="M102.441 90.3069L85.2604 93.1241L80.731 75.1253L92.7575 74.0298L102.441 90.3069Z" fill="#FFB8B8"/>
                    <path d="M112.437 164.18L112.506 165.007C99.1653 169.61 84.8925 170.821 70.9692 168.531L70.8786 169.999C70.8279 170.786 70.5932 171.55 70.1934 172.228C69.7936 172.907 69.24 173.482 68.5773 173.907C67.9147 174.332 67.1616 174.595 66.3789 174.674C65.5962 174.753 64.8059 174.646 64.0719 174.363L67.0333 167.786L70.7787 159.463L73.2339 154.007L72.3499 135.132L72.2562 133.178L72.1406 130.687L73.74 130.677L85.1105 130.608L95.9469 130.54L97.5994 130.53C107.961 143.302 116.511 153.681 112.437 164.18Z" fill="#2F2E41"/>
                    <path d="M97.4432 130.374L72.1406 133.191L71.2035 115.662C68.2341 108.073 70.1943 101.299 76.357 95.2203L77.6099 90.2508C77.9387 88.9465 78.6182 87.7574 79.5744 86.813C80.5306 85.8686 81.7269 85.205 83.0332 84.8944C87.175 82.5141 91.8667 81.3795 97.1308 81.5423C99.2332 82.3649 101.016 83.8433 102.215 85.759C103.415 87.6747 103.968 89.9262 103.792 92.1809C102.703 105.957 100.749 118.852 97.4432 130.374Z" fill="#9672FB"/>
                    <path d="M90.2585 100.95L90.0555 102.487L86.8224 126.931L85.1105 130.609L84.5514 131.811L71.5159 159.798L70.9692 168.531L70.8786 169.999C70.835 170.73 70.6324 171.442 70.285 172.086C69.9376 172.73 69.4538 173.29 68.8675 173.727C68.2813 174.163 67.6068 174.466 66.8913 174.614C66.1759 174.762 65.4369 174.751 64.7261 174.582C64.0152 174.414 63.3499 174.091 62.7766 173.637C62.2034 173.184 61.7362 172.61 61.4078 171.956C61.0793 171.302 60.8976 170.584 60.8754 169.852C60.8532 169.121 60.991 168.393 61.2792 167.72L61.8009 166.49L64.6435 159.798L72.3499 135.132L72.984 133.097L73.74 130.677L75.8891 123.8L79.3128 102.653L79.6377 100.637L90.2585 100.95Z" fill="#FFB8B8"/>
                    <path d="M92.1328 103.141C87.2236 101.373 82.5141 101.185 78.0758 103.141L79.5244 90.5589C79.4713 88.9877 80.0356 87.4583 81.0959 86.2997C82.1563 85.141 83.6281 84.4456 85.1948 84.363C85.9819 84.3215 86.7694 84.436 87.5121 84.7002C88.2549 84.9643 88.9384 85.3727 89.5233 85.902C90.1082 86.4314 90.5831 87.0712 90.9208 87.7849C91.2584 88.4985 91.4521 89.272 91.4908 90.0608L92.1328 103.141Z" fill="#9672FB"/>
                    <path d="M77.2051 56.4272C77.2051 56.4272 71.7251 58.4311 71.5844 65.7166C71.5766 66.9426 71.7399 68.1637 72.0696 69.3443C72.4249 70.6833 72.71 73.5885 70.3205 77.4613C68.7591 79.9751 67.3475 82.5792 66.093 85.26L72.2634 85.8566L73.2837 75.6067C73.7784 70.6373 75.0005 65.768 76.9108 61.1554L76.9507 61.0591C76.9507 61.0591 79.7815 65.9893 85.1616 65.8374L83.186 63.9662C83.186 63.9662 89.9246 66.5091 93.5888 67.0197C94.007 67.078 94.4014 67.2496 94.7295 67.5159C95.0576 67.7822 95.3069 68.1332 95.4507 68.531C95.5945 68.9288 95.6272 69.3584 95.5454 69.7734C95.4636 70.1885 95.2703 70.5733 94.9864 70.8865C94.9649 70.9101 94.9429 70.9337 94.9205 70.9575C92.6797 73.3331 88.2197 78.8545 91.0289 83.0145C93.838 87.1746 91.5647 88.3949 91.5647 88.3949L95.727 85.965L97.616 84.7555L97.6593 86.2959L107.618 84.8586C107.618 84.8586 110.298 84.3976 104.349 78.0138C104.349 78.0138 102.756 75.5146 103.36 73.3031C103.86 71.6213 103.954 69.8444 103.634 68.119C102.14 60.9363 96.6696 46.7267 77.2051 56.4272Z" fill="#2F2E41"/>
                </svg>

            </div>
            <div class="title-category">
                <h2 class="fw-600">Things to Do</h2>
            </div>
            <div id="category" class="category">
                <div class="card homework">
                    <div class="card-icon">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="30" cy="30" r="30" fill="#66B0E4"/>
                            <path d="M45.2617 21.3359C45.7825 22.0781 45.8997 22.918 45.6133 23.8555L40.2422 41.5508C39.9948 42.3841 39.4967 43.084 38.748 43.6504C37.9993 44.2168 37.2018 44.5 36.3555 44.5H18.3281C17.3255 44.5 16.3587 44.1517 15.4277 43.4551C14.4967 42.7585 13.849 41.9023 13.4844 40.8867C13.1719 40.0143 13.1589 39.1875 13.4453 38.4063C13.4453 38.3542 13.4648 38.1784 13.5039 37.8789C13.543 37.5794 13.569 37.3385 13.582 37.1563C13.595 37.0521 13.5755 36.9121 13.5234 36.7363C13.4714 36.5605 13.4518 36.4336 13.4648 36.3555C13.4909 36.2122 13.543 36.0755 13.6211 35.9453C13.6992 35.8151 13.8066 35.6621 13.9434 35.4863C14.0801 35.3105 14.1875 35.1576 14.2656 35.0273C14.5651 34.5326 14.8581 33.9369 15.1445 33.2402C15.431 32.5436 15.6263 31.9479 15.7305 31.4531C15.7695 31.3229 15.7728 31.1276 15.7402 30.8672C15.7077 30.6068 15.7044 30.4245 15.7305 30.3203C15.7695 30.1771 15.8802 29.9948 16.0625 29.7734C16.2448 29.5521 16.3555 29.4023 16.3945 29.3242C16.668 28.8555 16.9414 28.2565 17.2148 27.5273C17.4883 26.7982 17.651 26.2122 17.7031 25.7695C17.7161 25.6523 17.6999 25.444 17.6543 25.1445C17.6087 24.8451 17.612 24.6628 17.6641 24.5977C17.7161 24.4284 17.8594 24.2298 18.0937 24.002C18.3281 23.7741 18.4714 23.6276 18.5234 23.5625C18.7708 23.224 19.0475 22.6738 19.3535 21.9121C19.6595 21.1504 19.8385 20.5221 19.8906 20.0273C19.9036 19.9232 19.8841 19.7572 19.832 19.5293C19.7799 19.3014 19.7669 19.1289 19.793 19.0117C19.819 18.9076 19.8776 18.7904 19.9687 18.6602C20.0599 18.5299 20.1771 18.3802 20.3203 18.2109C20.4635 18.0417 20.5742 17.9049 20.6523 17.8008C20.7565 17.6445 20.8639 17.446 20.9746 17.2051C21.0853 16.9642 21.1829 16.7363 21.2676 16.5215C21.3522 16.3066 21.4564 16.0723 21.5801 15.8184C21.7038 15.5645 21.8307 15.3561 21.9609 15.1934C22.0911 15.0306 22.2637 14.8776 22.4785 14.7344C22.6934 14.5911 22.9277 14.5163 23.1816 14.5098C23.4355 14.5033 23.7448 14.5391 24.1094 14.6172L24.0898 14.6758C24.5846 14.5586 24.9167 14.5 25.0859 14.5H39.9492C40.9128 14.5 41.6549 14.8646 42.1758 15.5938C42.6966 16.3229 42.8138 17.1693 42.5273 18.1328L37.1758 35.8281C36.707 37.3776 36.2415 38.377 35.7793 38.8262C35.3171 39.2754 34.4805 39.5 33.2695 39.5H16.2969C15.9453 39.5 15.6979 39.5977 15.5547 39.793C15.4115 40.0013 15.4049 40.2813 15.5352 40.6328C15.8477 41.5443 16.7852 42 18.3477 42H36.375C36.7526 42 37.1172 41.8991 37.4687 41.6973C37.8203 41.4954 38.0482 41.2253 38.1523 40.8867L44.0117 21.6094C44.1029 21.3229 44.1354 20.9518 44.1094 20.4961C44.6042 20.6914 44.9883 20.9714 45.2617 21.3359ZM24.4805 21.375C24.4284 21.5443 24.4414 21.6908 24.5195 21.8145C24.5977 21.9382 24.7279 22 24.9102 22H36.7851C36.9544 22 37.1204 21.9382 37.2832 21.8145C37.446 21.6908 37.5534 21.5443 37.6055 21.375L38.0156 20.125C38.0677 19.9557 38.0547 19.8092 37.9766 19.6855C37.8984 19.5619 37.7682 19.5 37.5859 19.5H25.7109C25.5417 19.5 25.3756 19.5619 25.2129 19.6855C25.0501 19.8092 24.9427 19.9557 24.8906 20.125L24.4805 21.375ZM22.8594 26.375C22.8073 26.5443 22.8203 26.6908 22.8984 26.8145C22.9766 26.9382 23.1068 27 23.2891 27H35.1641C35.3333 27 35.4993 26.9382 35.6621 26.8145C35.8249 26.6908 35.9323 26.5443 35.9844 26.375L36.3945 25.125C36.4466 24.9557 36.4336 24.8092 36.3555 24.6855C36.2773 24.5618 36.1471 24.5 35.9648 24.5H24.0898C23.9206 24.5 23.7546 24.5618 23.5918 24.6855C23.429 24.8092 23.3216 24.9557 23.2695 25.125L22.8594 26.375Z" fill="white"/>
                            </svg>

                    </div>
                    <h3 class="fw-700">Homework</h3>
                </div>
                <div class="card house">
                    <div class="card-icon">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="30" cy="30" r="30" fill="#6444E4"/>
                            <path d="M43.0031 27.6875L40.375 25.0612V18.625C40.375 17.6281 39.5594 16.8125 38.5625 16.8125H36.75C35.7531 16.8125 34.9375 17.6281 34.9375 18.625V19.6273L31.3125 16.0059C30.8177 15.5383 30.3646 15 29.5 15C28.6354 15 28.1823 15.5383 27.6875 16.0059L15.9969 27.6875C15.4314 28.2766 15 28.7061 15 29.5C15 30.5204 15.783 31.3125 16.8125 31.3125H18.625V42.1875C18.625 43.1844 19.4406 44 20.4375 44H25.875V34.9375C25.875 33.9406 26.6906 33.125 27.6875 33.125H31.3125C32.3094 33.125 33.125 33.9406 33.125 34.9375V44H38.5625C39.5594 44 40.375 43.1844 40.375 42.1875V31.3125H42.1875C43.217 31.3125 44 30.5204 44 29.5C44 28.7061 43.5686 28.2766 43.0031 27.6875Z" fill="white"/>
                            </svg>

                    </div>
                    <h3 class="fw-700">House</h3>
                </div>
                <div class="card learn">
                    <div class="card-icon">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="30" cy="30" r="30" fill="#0D8C6F"/>
                            <path d="M30.0821 15.848L29.5 16.9333V25.5667H46.7667L47.3365 24.4739L30.0821 15.848Z" fill="white"/>
                            <path d="M28.9179 15.848L29.5 16.9333V25.5667H12.2333L11.6635 24.4739L28.9179 15.848Z" fill="white"/>
                            <path d="M28.9179 35.2853L29.5 34.2V25.5667H12.2333L11.6635 26.6594L28.9179 35.2853Z" fill="white"/>
                            <path d="M30.0821 35.2853L29.5 34.2V25.5667H46.7667L47.3365 26.6594L30.0821 35.2853Z" fill="white"/>
                            <path d="M46.7667 26.8C47.4478 26.8 48 26.2478 48 25.5667C48 24.8855 47.4478 24.3333 46.7667 24.3333C46.0855 24.3333 45.5333 24.8855 45.5333 25.5667C45.5333 26.2478 46.0855 26.8 46.7667 26.8Z" fill="white"/>
                            <path d="M12.2333 26.8C12.9145 26.8 13.4667 26.2478 13.4667 25.5667C13.4667 24.8855 12.9145 24.3333 12.2333 24.3333C11.5522 24.3333 11 24.8855 11 25.5667C11 26.2478 11.5522 26.8 12.2333 26.8Z" fill="white"/>
                            <path d="M29.5 35.4333C30.1811 35.4333 30.7333 34.8812 30.7333 34.2C30.7333 33.5189 30.1811 32.9667 29.5 32.9667C28.8188 32.9667 28.2667 33.5189 28.2667 34.2C28.2667 34.8812 28.8188 35.4333 29.5 35.4333Z" fill="white"/>
                            <path d="M29.5 18.1667C30.1811 18.1667 30.7333 17.6145 30.7333 16.9333C30.7333 16.2522 30.1811 15.7 29.5 15.7C28.8188 15.7 28.2667 16.2522 28.2667 16.9333C28.2667 17.6145 28.8188 18.1667 29.5 18.1667Z" fill="white"/>
                            <path d="M31.1847 37.4918C31.0811 37.5436 30.9763 37.5867 30.8702 37.6225C30.4238 37.8063 29.965 37.9 29.5 37.9C29.0363 37.9 28.5787 37.8075 28.1347 37.6237C28.0274 37.588 27.9201 37.5436 27.8153 37.4905L18.4 32.7841V37.9C18.4 41.3052 23.3691 44.0667 29.5 44.0667C35.6309 44.0667 40.6 41.3052 40.6 37.9V32.7841L31.1847 37.4918Z" fill="white"/>
                            <path d="M44.3 30.9354V44.0667C44.3 44.7487 44.8525 45.3 45.5333 45.3C46.2141 45.3 46.7667 44.7487 46.7667 44.0667V29.702L44.3 30.9354Z" fill="white"/>
                            <path d="M48 44.0667C48 45.4295 45.5333 49 45.5333 49C45.5333 49 43.0667 45.4295 43.0667 44.0667C43.0667 42.7038 44.1705 41.6 45.5333 41.6C46.8962 41.6 48 42.7038 48 44.0667Z" fill="white"/>
                            </svg>


                    </div>
                    <h3 class="fw-700">Learn</h3>
                </div>
                <div class="card exercise">
                    <div class="card-icon">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="30" cy="30" r="30" fill="#F94D4D"/>
                            <path d="M37.306 20.807L20.6892 37.4239L22.5748 39.3095L39.1916 22.6926L37.306 20.807Z" fill="white"/>
                            <path d="M44.7782 13.4226L43.2457 14.9545L45.131 16.8406L46.6635 15.3088L44.7782 13.4226Z" fill="white"/>
                            <path d="M15.2213 46.5101L16.7538 44.9782L14.8685 43.0921L13.336 44.6239L15.2213 46.5101Z" fill="white"/>
                            <path d="M33.4027 15.4573L30.1011 18.7552L41.1727 29.8394L44.4744 26.5415L33.4027 15.4573Z" fill="white"/>
                            <path d="M39.321 13.3846L36.7268 15.9762L44.1482 23.405L46.7424 20.8134L39.321 13.3846Z" fill="white"/>
                            <path d="M26.594 44.4157L29.8957 41.1178L18.8241 30.0336L15.5224 33.3316L26.594 44.4157Z" fill="white"/>
                            <path d="M20.6769 46.6344L23.2711 44.0428L15.8497 36.614L13.2555 39.2056L20.6769 46.6344Z" fill="white"/>
                            </svg>


                    </div>
                    <h3 class="fw-700">Exercise</h3>
                </div>
            </div>
            <div id="menu" class="menu">
                <div class="settings">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.89 19.655C27.3381 21.4468 26.3876 23.0904 25.11 24.4625L26 28.4875C24.7364 29.5007 23.3261 30.3158 21.8175 30.905L18.7775 28.1225C16.9505 28.5424 15.052 28.5424 13.225 28.1225L10.1825 30.905C8.67386 30.3158 7.26358 29.5007 6 28.4875L6.89 24.465C5.61203 23.0921 4.66158 21.4477 4.11 19.655L0.182499 18.405C-0.0596528 16.8041 -0.0596528 15.1759 0.182499 13.575L4.11 12.325C4.66441 10.5395 5.61469 8.90212 6.89 7.535L6 3.5125C7.26358 2.49933 8.67386 1.68418 10.1825 1.09499L13.2225 3.87749C15.0495 3.45761 16.948 3.45761 18.775 3.87749L21.815 1.09499C23.3245 1.68392 24.7357 2.49908 26 3.5125L25.11 7.535C26.3876 8.90713 27.3381 10.5507 27.89 12.3425L31.8175 13.5925C32.0596 15.1934 32.0596 16.8216 31.8175 18.4225L27.89 19.655ZM16 10.3325C14.8791 10.3325 13.7833 10.6649 12.8513 11.2876C11.9193 11.9104 11.1929 12.7955 10.7639 13.8311C10.335 14.8667 10.2227 16.0063 10.4414 17.1057C10.6601 18.2051 11.1999 19.2149 11.9925 20.0075C12.7851 20.8001 13.7949 21.3399 14.8943 21.5586C15.9937 21.7773 17.1333 21.665 18.1689 21.2361C19.2045 20.8071 20.0896 20.0807 20.7124 19.1487C21.3351 18.2167 21.6675 17.1209 21.6675 16C21.6675 14.4969 21.0704 13.0553 20.0075 11.9925C18.9447 10.9296 17.5031 10.3325 16 10.3325Z" fill="#F8F8F8"/>
                        </svg>

                </div>
                <div id="btn-add" class="add">
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="21" cy="21" r="21" fill="#A1D4F1"/>
                        <path d="M31.5 19.25H22.75V10.5C22.75 9.534 21.966 8.75 21 8.75C20.034 8.75 19.25 9.534 19.25 10.5V19.25H10.5C9.534 19.25 8.75 20.034 8.75 21C8.75 21.966 9.534 22.75 10.5 22.75H19.25V31.5C19.25 32.466 20.034 33.25 21 33.25C21.966 33.25 22.75 32.466 22.75 31.5V22.75H31.5C32.466 22.75 33.25 21.966 33.25 21C33.25 20.034 32.466 19.25 31.5 19.25Z" fill="white"/>
                        </svg>

                </div>
                <div class="profile">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.25 22C32.78 22 34.815 19.9467 34.815 17.4167C34.815 14.8867 32.78 12.8333 30.25 12.8333C27.72 12.8333 25.6667 14.8867 25.6667 17.4167C25.6667 19.9467 27.72 22 30.25 22ZM16.5 20.1667C19.5342 20.1667 21.9817 17.7008 21.9817 14.6667C21.9817 11.6325 19.5342 9.16666 16.5 9.16666C13.4658 9.16666 11 11.6325 11 14.6667C11 17.7008 13.4658 20.1667 16.5 20.1667ZM30.25 25.6667C26.8858 25.6667 20.1667 27.3533 20.1667 30.7083V34.8333H40.3333V30.7083C40.3333 27.3533 33.6142 25.6667 30.25 25.6667ZM16.5 23.8333C12.2192 23.8333 3.66666 25.9783 3.66666 30.25V34.8333H16.5V30.7083C16.5 29.15 17.1142 26.4275 20.845 24.3467C19.25 24.0075 17.7008 23.8333 16.5 23.8333Z" fill="#F8F8F8"/>
                        </svg>

                </div>
            </div>
        </div>
                `;  
            }
            renderChecklist(data){
                // var screenChecklist = document.querySelector('.checklist')
                screenChecklist.innerHTML = `
            <div class="content-checklist">
            <div class="title-list ${data.group}">
                <h2 class="fw-700">${data.title}</h2>
            </div>
            <div class="content-list">
                
            </div>
            <div id="menuAdd" class="action">
                <form id="formActivity" class="${data.group} hide"action="">
                    <input type="text" id="nameActivity" placeholder="Add activity" autocomplete="off" required>
                    <textarea name="" id="descriptionActivity" placeholder="Add description"  rows="3" maxlength="25"></textarea>
                </form>
                <div id="newAtt" class="menu add ${data.group} hide">
                    <div id="back2" class="back">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                            <path d="M23.8454 26.7956C24.6126 27.5623 24.613 28.8077 23.8454 29.5752C23.0786 30.3426 21.8337 30.3424 21.0658 29.5752C21.0613 29.5706 21.0579 29.5661 21.0538 29.5614L21.0482 29.5664L8.02982 16.548L8.03524 16.543C7.67174 16.1865 7.44641 15.6907 7.44641 15.1414C7.44596 14.525 7.73044 13.975 8.17545 13.6147L8.1619 13.6016L21.1803 0.583197L21.1859 0.588616C21.19 0.583875 21.1934 0.579811 21.1979 0.575521C21.9655 -0.192125 23.21 -0.192125 23.9777 0.575521C24.7449 1.34226 24.7449 2.58675 23.9777 3.35508C23.9729 3.35959 23.9684 3.36275 23.9639 3.36727L23.9691 3.37269L12.2018 15.1414L23.8384 26.778L23.8327 26.7827C23.8361 26.7877 23.8408 26.7909 23.8454 26.7956Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="32" height="32" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                    </div>
                    <div id="addAction2" class="add">
                        <img src="img/add-${data.group}.png" alt="plus">
                    </div>
                </div>
                <div id="menu1" class="menu add ${data.group}">
                    <div id="back" class="back">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                            <path d="M23.8454 26.7956C24.6126 27.5623 24.613 28.8077 23.8454 29.5752C23.0786 30.3426 21.8337 30.3424 21.0658 29.5752C21.0613 29.5706 21.0579 29.5661 21.0538 29.5614L21.0482 29.5664L8.02982 16.548L8.03524 16.543C7.67174 16.1865 7.44641 15.6907 7.44641 15.1414C7.44596 14.525 7.73044 13.975 8.17545 13.6147L8.1619 13.6016L21.1803 0.583197L21.1859 0.588616C21.19 0.583875 21.1934 0.579811 21.1979 0.575521C21.9655 -0.192125 23.21 -0.192125 23.9777 0.575521C24.7449 1.34226 24.7449 2.58675 23.9777 3.35508C23.9729 3.35959 23.9684 3.36275 23.9639 3.36727L23.9691 3.37269L12.2018 15.1414L23.8384 26.778L23.8327 26.7827C23.8361 26.7877 23.8408 26.7909 23.8454 26.7956Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="32" height="32" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                    </div>
                    <div id="addAction" class="add">
                        <img src="img/add-${data.group}.png" alt="plus">
                    </div>
                </div>
            </div>
            </div>
                `;
            const btnBack = document.querySelector('#back svg')
            btnBack.addEventListener('click',function(){
                screenChecklist.classList.add('hide')
                screenStart.classList.remove('hide')
            })
            const btnBack2 = document.querySelector('#back2 svg')
            btnBack2.addEventListener('click',function(){
                screenChecklist.classList.add('hide')
                screenStart.classList.remove('hide')
            })
            const addAction = document.getElementById('addAction')
            addAction.addEventListener('click',function(){
                const formActivity = document.getElementById('formActivity')
                const newAtt = document.getElementById('newAtt')
                const addAction2 = document.getElementById('addAction2')
                const menu1 = document.getElementById('menu1')
                formActivity.classList.remove('hide')
                newAtt.classList.remove('hide')
                menu1.classList.add('hide')
            })
            addAction2.addEventListener('click',function(){
                const nameActivity = document.getElementById('nameActivity').value
                const descriptionActivity = document.getElementById('descriptionActivity').value
                
                const contentList = document.querySelector('.content-list')
                const element = document.createElement('div')
                element.innerHTML = `
                <div class="fullActivity">
                <div class="activity ${data.group}">
                    <div class="mark">
                        <img class="blank" src="img/yet.png" alt="yet">
                        <img class="done hide" src="img/check.png" alt="check">                    
                    </div>
                    <h3 class="fw-500">${nameActivity}</h3>
                </div>
                <div class="description">
                        <h3>${descriptionActivity}</h3>
                </div>
                </div>
                <br>
                `;
                contentList.appendChild(element)

                localStorage.setItem('activity',nameActivity)

                let activitys

                if(localStorage.getItem('activity') === null){
                    activitys = []
                }else{
                    activitys = JSON.parse(localStorage.getItem('activity'))
                }

                formActivity.reset()
                formActivity.classList.add('hide')
                newAtt.classList.add('hide')
                menu1.classList.remove('hide')

                document.body.addEventListener('click',function(e){

                    if(e.target.classList.contains('blank')){
                        e.target.classList.add('hide')
                        e.target.nextElementSibling.classList.remove('hide')
                        e.target.parentElement.nextElementSibling.classList.add('line')
                        e.target.parentElement.parentElement.nextElementSibling.firstElementChild.classList.add('line')
                    }

                    if(e.target.classList.contains('done')){
                        e.target.classList.add('hide')
                        e.target.previousElementSibling.classList.remove('hide')
                        e.target.parentElement.nextElementSibling.classList.remove('line')
                        e.target.parentElement.parentElement.nextElementSibling.firstElementChild.classList.remove('line')
                    }
                    
                })

            })
            }
            
        }

        // Form events
        const form = document.getElementById('form')
        form.addEventListener('submit',function(e){
            const name = document.getElementById('name').value
            
            const user = new Start(name)
            const UI = new Render()

            UI.renderStart(user)

            form.reset()

            const screenLogin = document.querySelector('.header')
            screenLogin.classList.add('hide')

            const screenStart = document.querySelector('.start')
            const cardHomework = document.querySelector('.card.homework')
            const cardHouse = document.querySelector('.card.house')
            const cardLearn = document.querySelector('.card.learn')
            const cardExercise = document.querySelector('.card.exercise')

            cardHomework.addEventListener('click',function(){
                const data = {title: 'Learning Activities', group: 'homework'}
                screenStart.classList.add('hide')
                UI.renderChecklist(data)
                screenChecklist.classList.remove('hide')
            })

            cardHouse.addEventListener('click',function(){
                const data = {title: 'House Activities', group: 'house'}
                screenStart.classList.add('hide')
                UI.renderChecklist(data)
                screenChecklist.classList.remove('hide')
            })

            cardLearn.addEventListener('click',function(){
                const data = {title: 'School Activities', group: 'learn'}
                screenStart.classList.add('hide')
                UI.renderChecklist(data)
                screenChecklist.classList.remove('hide')
            })

            cardExercise.addEventListener('click',function(){
                const data = {title: 'Sport Activities', group: 'exercise'}
                screenStart.classList.add('hide')
                UI.renderChecklist(data)
                screenChecklist.classList.remove('hide')
            })


            

            e.preventDefault()
        })

        



    });
})();