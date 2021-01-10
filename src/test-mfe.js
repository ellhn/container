import axios from 'axios';
import {runScript, loadCss} from './utils';
import * as singleSpa from "single-spa";

const loadTestMfe = async () => {
    try {
        const url = 'http://localhost:3001/';
        const entries = await axios.get(`${url}asset-manifest.json`);
        for (const entry of entries.data.entrypoints) {
            if (entry.includes("static/js")) {
                await runScript(`${url}${entry}`);
            }
            if (entry.includes("static/css")) {
                await loadCss(`${url}${entry}`);
            }
        }
        return window.testMfe;
    } catch (error) {
        throw error;
    }
};
export const registerMfe = () => {
    singleSpa.registerApplication({name:'mfe', app:loadTestMfe, activeWhen: '/'});
}
