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
    concentration: boolean;
}

const userFriendlyErrors = {
    404: "We couldn't find what you were looking for. We are working on fixing the issue.",
    500: "There seems to be a temporary error on our end. Please try again later.",
    networkError: "Failed to connect to the source. Check your network connection and try again.",
}

const wizardLoader = document.getElementById('loading-wizard-gif-container')

export async function fetchSpellBook(): Promise<SpellBookOverview[]> {
    try {
        wizardLoader?.classList.toggle('hidden')
        const response = await fetch('https://www.dnd5eapi.co/api/2014/spells');
        if (!response.ok) {
            const message = userFriendlyErrors[response.status as keyof typeof userFriendlyErrors] || `An unexpected error occurred.`;
            throw new Error(message);
        } 
        const spellData = await response.json();   
        return spellData.results;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error fetching spell book:', error.message);
            const finalMessage = error.name === 'TypeError' 
                ? userFriendlyErrors.networkError
                : error.message;
            document.body.innerHTML = `
            <div class="error-container">
                <img class="error-wizard-gif" src="img/loading-screen-wizard.gif" alt="reading wizard in candle light">
                <p class="error-message">Sorry, we couldn't summon the archive at this time. <br> ${finalMessage}</p>
            </div>
            `;
        }
        throw error;
    } finally {
        wizardLoader?.classList.toggle('hidden')
    }
}

export async function fetchSpellDetails(): Promise<SpellDetailsOverview> {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const spellIndex = urlParams.get('index');
        const response = await fetch(`https://www.dnd5eapi.co/api/2014/spells/${spellIndex}`);
        if (!response.ok) {
            const message = userFriendlyErrors[response.status as keyof typeof userFriendlyErrors] || `An unexpected error occurred.`;
            throw new Error(message);
        }
        const spellDetails = await response.json();
        return spellDetails;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error fetching spell details:', error);
            const finalMessage = error.name === 'TypeError' 
                ? userFriendlyErrors.networkError
                : error.message;
            document.body.innerHTML = `
            <div class="error-container">
                <img class="error-wizard-gif" src="img/loading-screen-wizard.gif" alt="reading wizard in candle light">
                <p class="error-message">Sorry, we couldn't load the archive at this time. <br> ${finalMessage}</p>
            </div>
            `;
        }
        throw error;
    }
}