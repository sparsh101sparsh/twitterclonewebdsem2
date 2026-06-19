document.addEventListener('DOMContentLoaded', () => {
    const tweetsContainer = document.getElementById('tweets-container');

    // Indian persona tweets data
    const tweetsData = [
        {
            name: "Sparsh Singh",
            handle: "@sparsh_singh",
            time: "2h",
            verified: true,
            avatar: "assets/profile.jpg",
            text: "Just had the best cutting chai at the corner tapri. No Starbucks can ever beat this feeling. ☕✨\n\n#ChaiLover #MumbaiDiaries",
            image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=800&q=80",
            replies: "124",
            retweets: "450",
            likes: "2.1K",
            views: "45K"
        },
        {
            name: "Priyanka Desai",
            handle: "@priyanka_codes",
            time: "4h",
            verified: false,
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
            text: "Traffic in Bangalore is the real test of patience. Took me 2 hours to cross Silk Board today. Started learning a new JS framework in the cab itself. 😭🚘\n\n#BangaloreTraffic #TechLife",
            image: null,
            replies: "45",
            retweets: "120",
            likes: "890",
            views: "12K"
        },
        {
            name: "Vikram Singh",
            handle: "@viku_sports",
            time: "5h",
            verified: true,
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
            text: "Virat Kohli's cover drive is pure emotion. That's it. That's the tweet. 🏏🔥",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80",
            replies: "890",
            retweets: "3.2K",
            likes: "15.4K",
            views: "250K"
        },
        {
            name: "Ananya Patel",
            handle: "@ananya_explores",
            time: "8h",
            verified: false,
            avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
            text: "Why does every Indian mom think that storing sewing kits in the Royal Dansk cookie tin is a universal law? My disappointment is immeasurable and my day is ruined. 🍪🧵",
            image: null,
            replies: "560",
            retweets: "1.2K",
            likes: "10.5K",
            views: "150K"
        },
        {
            name: "Sparsh Singh",
            handle: "@sparsh_singh",
            time: "12h",
            verified: true,
            avatar: "assets/profile.jpg",
            text: "Finally deployed the new feature to production. We did it guys! No more working on weekends (hopefully). 🚀💻",
            image: null,
            replies: "23",
            retweets: "45",
            likes: "340",
            views: "8K"
        }
    ];

    // Function to generate tweet HTML
    function createTweetHTML(tweet) {
        const verifiedIcon = tweet.verified ? '<i class="fa-solid fa-circle-check verified-badge"></i>' : '';
        const imageHTML = tweet.image ? `<img src="${tweet.image}" alt="Tweet Image" class="tweet-image">` : '';

        return `
            <div class="tweet">
                <img src="${tweet.avatar}" alt="${tweet.name}" class="avatar">
                <div class="tweet-content">
                    <div class="tweet-header">
                        <div class="tweet-user-info">
                            <span class="tweet-user-name">${tweet.name}</span>
                            ${verifiedIcon}
                            <span class="tweet-user-handle">${tweet.handle}</span>
                            <span class="tweet-time">· ${tweet.time}</span>
                        </div>
                        <i class="fa-solid fa-ellipsis" style="color: var(--text-secondary); padding: 8px; border-radius: 50%; cursor: pointer;"></i>
                    </div>
                    <div class="tweet-text">${tweet.text}</div>
                    ${imageHTML}
                    <div class="tweet-actions">
                        <div class="action-btn action-reply">
                            <i class="fa-regular fa-comment"></i>
                            <span>${tweet.replies}</span>
                        </div>
                        <div class="action-btn action-retweet">
                            <i class="fa-solid fa-retweet"></i>
                            <span>${tweet.retweets}</span>
                        </div>
                        <div class="action-btn action-like">
                            <i class="fa-regular fa-heart"></i>
                            <span>${tweet.likes}</span>
                        </div>
                        <div class="action-btn action-view">
                            <i class="fa-solid fa-chart-simple"></i>
                            <span>${tweet.views}</span>
                        </div>
                        <div class="action-btn">
                            <i class="fa-regular fa-bookmark"></i>
                        </div>
                        <div class="action-btn">
                            <i class="fa-solid fa-arrow-up-from-bracket"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Render tweets
    function renderTweets() {
        let allTweetsHTML = '';
        tweetsData.forEach(tweet => {
            allTweetsHTML += createTweetHTML(tweet);
        });
        tweetsContainer.innerHTML = allTweetsHTML;

        // Add event listeners for interaction (like button)
        const likeButtons = document.querySelectorAll('.action-like');
        likeButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const icon = this.querySelector('i');
                const span = this.querySelector('span');
                
                if (icon.classList.contains('fa-regular')) {
                    // Like
                    icon.classList.remove('fa-regular');
                    icon.classList.add('fa-solid');
                    icon.style.color = '#f91880';
                    this.style.color = '#f91880';
                    
                    // Simple counter increment
                    let count = span.innerText;
                    if (count.includes('K')) {
                        let num = parseFloat(count);
                        span.innerText = (num + 0.1).toFixed(1) + 'K';
                    } else {
                        span.innerText = parseInt(count) + 1;
                    }
                    
                    // Heart pop animation
                    icon.style.transform = 'scale(1.3)';
                    setTimeout(() => icon.style.transform = 'scale(1)', 200);
                } else {
                    // Unlike
                    icon.classList.remove('fa-solid');
                    icon.classList.add('fa-regular');
                    icon.style.color = '';
                    this.style.color = '';
                }
            });
        });
        
        // Retweet interaction
        const retweetButtons = document.querySelectorAll('.action-retweet');
        retweetButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const icon = this.querySelector('i');
                
                if (this.style.color !== 'rgb(0, 186, 124)') {
                    icon.style.color = '#00ba7c';
                    this.style.color = '#00ba7c';
                    
                    icon.style.transform = 'rotate(180deg)';
                    setTimeout(() => icon.style.transform = 'rotate(0deg)', 300);
                } else {
                    icon.style.color = '';
                    this.style.color = '';
                }
            });
        });
    }

    renderTweets();

    // Navigation logic
    const navItems = document.querySelectorAll('.nav-item');
    const composeBox = document.querySelector('.compose-box');
    const feedHeaderTabs = document.querySelector('.feed-header .tabs');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            item.classList.add('active');
            
            const sectionName = item.querySelector('span').innerText;
            
            if (sectionName === 'Home') {
                composeBox.style.display = 'flex';
                feedHeaderTabs.innerHTML = `
                    <div class="tab active">For you<div class="tab-indicator"></div></div>
                    <div class="tab">Following</div>
                `;
                renderTweets();
            } else {
                composeBox.style.display = 'none';
                feedHeaderTabs.innerHTML = `
                    <div class="tab active" style="text-align: left; padding-left: 16px; font-size: 20px; font-weight: 700;">
                        ${sectionName}
                    </div>
                `;
                tweetsContainer.innerHTML = `
                    <div style="padding: 40px 20px; text-align: center; color: var(--text-secondary);">
                        <h2 style="color: var(--text-primary); font-size: 32px; font-weight: 800; margin-bottom: 8px;">Nothing to see here — yet</h2>
                        <p style="font-size: 15px;">When there are new updates in ${sectionName}, they'll show up here.</p>
                    </div>
                `;
            }
        });
    });
});
