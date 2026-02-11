export interface SpellBookOverview {
    index: string;
    name: string;
    level: number;
}

export interface APIReference {
    name: string;
}

export interface SpellDetailsOverview extends SpellBookOverview{
    desc: string[];
    range: string;
    components: string[];
    casting_time: string;
    duration: string;
    higher_level?: string[];
    material?: string;
    school: APIReference;
}

export async function fetchSpellBook(): Promise<SpellBookOverview[]> {
    try {
        const response = await fetch('https://www.dnd5eapi.co/api/2014/spells');
        if (!response.ok) {
            throw new Error('Error: ' + response.statusText)
        } 
        const spellData = await response.json();   
        return spellData.results;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error fetching spell book:', error);
            document.body.innerHTML = `
            <div class="error-container">
                <img class="wizard-gif" src="img/loading-screen-wizard.gif" alt="reading wizard in candle light">
                <p class="error-message">Sorry, we couldn't load the archive at this time. <br> ${error.message}. <br>
                We are working on fixing the issue.</p>
            </div>
            `;
        }
        throw error;
    } 
}

export async function fetchSpellDetails(): Promise<SpellDetailsOverview> {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const spellIndex = urlParams.get('index');
        const response = await fetch(`https://www.dnd5eapi.co/api/2014/spells/${spellIndex}`);
        if (!response.ok) {
            throw new Error('Error: ' + response.statusText)
        }
        const spellDetails = await response.json();
        return spellDetails;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error fetching spell details:', error);
            document.body.innerHTML = `
            <div class="error-container">
                <img class="wizard-gif" src="img/loading-screen-wizard.gif" alt="reading wizard in candle light">
                <p class="error-message">Sorry, we couldn't load the archive at this time. <br> ${error.message}. <br>
                We are working on fixing the issue.</p>
            </div>
            `;
        }
        throw error;
    }
}