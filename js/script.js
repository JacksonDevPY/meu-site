window.addEventListener('load', () => {
    // 1. Remove a classe de carregamento para exibir o site com fade-in
    document.body.classList.remove('loading-hidden'); //
    
    // 2. Animação de entrada GSAP para a seção Hero
    gsap.from(".hero-content > *", { 
        y: 30, 
        opacity: 0, 
        duration: 1, 
        stagger: 0.2,
        ease: "power2.out"
    }); //
});

/**
 * Lógica de Navegação:
 * - Rolagem suave para seções internas.
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); //
        
        const targetID = this.getAttribute('href'); //
        
        if (targetID === "#") {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            }); //
        } else {
            const targetElement = document.querySelector(targetID); //
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                }); //
            }
        }
    });
});

/**
 * Lógica do Formulário de Contato:
 * - Envio formatado para WhatsApp.
 */
const contatoForm = document.querySelector('form'); //

if (contatoForm) {
    contatoForm.addEventListener('submit', function(e) {
        e.preventDefault(); //

        const nome = this.querySelector('input[placeholder="Seu nome"]').value; //
        const email = this.querySelector('input[placeholder="Seu email"]').value; //
        const mensagem = this.querySelector('textarea[placeholder="Sua mensagem"]').value; //

        const meuNumero = "5594991569871"; //
        
        const textoFormatado = `*NOVO ORÇAMENTO - ALGORITHM'S TECH*%0A` +
                               `------------------------------------%0A` +
                               `*👤 Nome:* ${nome}%0A` +
                               `*📧 E-mail:* ${email}%0A` +
                               `*📋 Assunto:* Solicitação de Orçamento%0A` +
                               `------------------------------------%0A` +
                               `*💬 Mensagem:*%0A${mensagem}`; //

        // URL corrigida utilizando a variável meuNumero corretamente
        const urlWhatsapp = `https://wa.me/${meuNumero}?text=${textoFormatado}`;

        window.open(urlWhatsapp, '_blank'); //
        this.reset(); //
    });
}
