// Define language-specific text content
const languageData = {
    'en': {
        'home': 'Home',
        'welcome': 'Welcome to Work Opportunities in Japan!',
        'explore': 'Explore job opportunities now.',
        'jobListings': 'Job Listings',
        'aboutJapan': 'About Japan',
        'aboutContent': 'Discover the rich culture and lifestyle of Japan.',
        'contact': 'Contact Us',
        'about': 'About Us',
        'social': 'Social Media',
        'jobListingsHeader': 'Job Listings',
        'aboutJapanHeader': 'About Japan',
        'aboutJapanText': 'Japan, known as the Land of the Rising Sun, is an island nation in East Asia. It is renowned for its rich culture, technological advancements, and stunning natural landscapes. From the bustling metropolis of Tokyo to the serene countryside dotted with cherry blossoms, Japan offers a diverse range of experiences for visitors and residents alike.',
        'contactHeader': 'Contact Us',
        'contactText': 'For inquiries or assistance, please contact us via email at info@example.com or give us a call at +123456789.',
        'aboutHeader': 'About Us',
        'aboutText': 'Work Opportunities in Japan is dedicated to providing valuable resources and information about job opportunities in Japan. Our mission is to help individuals explore and pursue fulfilling career paths in this vibrant and dynamic country.',
        'job1':'Job 1: Position Name',
        'job2':'Job 2: Position Name',
        'job3':'Job 3: Position Name'
    },
    'ja': {
        'home': 'ホーム',
        'welcome': '日本の仕事の機会へようこそ！',
        'explore': '今すぐ求人情報を探索してください。',
        'jobListings': '求人情報',
        'aboutJapan': '日本について',
        'aboutContent': '日本の豊かな文化とライフスタイルを発見してください。',
        'contact': 'お問い合わせ',
        'about': '私たちについて',
        'social': 'ソーシャルメディア',
        'jobListingsHeader': '求人情報',
        'aboutJapanHeader': '日本について',
        'aboutJapanText': '日本は、東アジアの島国であり、旭日の国として知られています。豊かな文化、技術の進歩、驚くべき自然景観で有名です。東京のにぎやかな都市から、桜の花が咲く静かな田園地帯まで、日本は訪問者や住民にとって多様な体験を提供しています。',
        'contactHeader': 'お問い合わせ',
        'contactText': 'お問い合わせやサポートが必要な場合は、info@example.comまでメールでご連絡いただくか、+123456789までお電話いただけます。',
        'aboutHeader': '私たちについて',
        'aboutText': '日本での求人機会に関する貴重なリソースと情報を提供することを目指しています。私たちの使命は、個人がこの活気あるダイナミックな国で充実したキャリアを探索し、追求する手助けをすることです。',
        'job1': '求人1: ポジション名',
        'job2': '求人2: ポジション名',
        'job3': '求人3: ポジション名'
    }
};

// Function to set language
function setLanguage(lang) {
    // Update text content based on selected language
    const elements = document.querySelectorAll('*[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (languageData[lang][key]) {
            element.textContent = languageData[lang][key];
        }
    });
}

// Event listener for language buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
    });
});

// Set default language
setLanguage('en');
