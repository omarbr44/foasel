// tailwind configuration
tailwind.config = {
    theme: {
        extend: {
            colors:{
            "site-primary": "#d74829",
            "site-secondary": "#343741",
            }
        },
        fontFamily:{
            Roboto: ["Roboto, sans-serif"],
        },
        container: {
            padding: "0.5rem",
            center: true,
        },
        screens:{
            sm: {'max': '640px'},
            md: {'max': '1024px',
                'min': '640px'} ,
            lg: '1024px',
        }
},
}
    function showHideNav() {
        let mobileNav = document.querySelector('#mobile-nav')
        if(mobileNav.className != 'hidden') {
            mobileNav.className = 'hidden'
        }
        else {
            mobileNav.className = 'block'
        }
    }
    let bloc = false
    function showblock(link) {
        const showblock1 = document.querySelector('#show-block1')
        const showblock2 = document.querySelector('#show-block2')
        const showblock3 = document.querySelector('#show-block3')
        const hideblock1 = document.querySelector('#hide-block1')
        if(hideblock1.classList.contains('hide-block')) {
            hideblock1.classList.remove('hide-block')
            hideblock1.classList.add('show-block')
            showblock1.classList.remove('show-block')
            showblock1.classList.add('hide-block')
            showblock2.classList.remove('show-block')
            showblock2.classList.add('hide-block')
            showblock3.classList.remove('show-block')
            showblock3.classList.add('hide-block')
        }
        else{
            hideblock1.classList.remove('show-block')
            hideblock1.classList.add('hide-block')
            showblock1.classList.remove('hide-block')
            showblock1.classList.add('show-block')
            showblock2.classList.remove('hide-block')
            showblock2.classList.add('show-block')
            showblock3.classList.remove('hide-block')
            showblock3.classList.add('show-block')

        }
        if(link)
            lenis.scrollTo(link)
    }