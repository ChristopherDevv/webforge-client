async function loadConfig() {
    const response = await fetch('config.json');
    const config = await response.json();

    document.getElementById('companyName').innerText = config.company_name;
    document.getElementById('address').innerText = config.address;
    document.getElementById('phoneNumber').innerText = config.phone_number;
    document.getElementById('industry').innerText = config.industry;
    document.getElementById('businessType').innerText = config.business_type;
    document.getElementById('servicesProducts').innerText = config.services_products;
    document.getElementById('tagline').innerText = config.tagline;
    document.getElementById('designPreferences').innerText = config.design_preferences;

    const brandColorsContainer = document.getElementById('brandColorsContainer');
    for (const [colorName, colorValue] of Object.entries(config.brand_colors)) {
        console.log(colorName, colorValue);
        const colorElement = document.createElement('div');
        colorElement.innerText = `${colorName}: `;
        const colorBox = document.createElement('span');
        colorBox.className = `bg-[${colorValue}] w-5 h-5 inline-block rounded-sm`;
        colorBox.style.backgroundColor = colorValue;
        colorElement.appendChild(colorBox);
        brandColorsContainer.appendChild(colorElement);
    }

    const socialMediaLinksContainer = document.getElementById('socialMediaLinksContainer');
    for (const [platform, url] of Object.entries(config.social_media_links)) {
        const linkElement = document.createElement('a');
        linkElement.classList.add('text-blue-600', 'font-semibold', 'underline');
        linkElement.href = url;
        linkElement.innerText = platform.charAt(0).toUpperCase() + platform.slice(1);
        linkElement.target = '_blank';
        socialMediaLinksContainer.appendChild(linkElement);
        socialMediaLinksContainer.appendChild(document.createTextNode(' | ')); 
    }
}

window.onload = loadConfig;
