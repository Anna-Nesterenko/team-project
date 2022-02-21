(() => {
    const refs = {
    openTeamBtn: document.querySelector('[data-team-open]'),
    closeTeamBtn: document.querySelector('[data-team-close]'),
        team: document.querySelector('[data-team]'),
    };
    
    refs.openTeamBtn.addEventListener('click', toggleTeam);
    refs.closeTeamBtn.addEventListener('click', toggleTeam);
    
    function toggleTeam() {
    refs.team.classList.toggle('is-hidden');}
})();