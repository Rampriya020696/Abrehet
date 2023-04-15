import {registerSheet} from 'react-native-actions-sheet';
import StripeCountrySheet from './StripeCountrySheet';

const SHEETS = {STRIPE_COUNTRY_SHEET: 'STRIPE_COUNTRY_SHEET'};

registerSheet(SHEETS.STRIPE_COUNTRY_SHEET, StripeCountrySheet);

export {SHEETS};
