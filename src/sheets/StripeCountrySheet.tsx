import {FlashList} from '@shopify/flash-list';
import {Text, Touchable, TouchableOpacity, View} from 'react-native';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {stripeCountryList} from '../utils/constant';
import {SHEETS} from './sheets';
type SheetProps = {
  sheetId: string;
  payload: {
    onSelect: (v: string) => void;
  };
};
function StripeCountrySheet(props: SheetProps) {
  return (
    <ActionSheet id={props.sheetId}>
      <View style={{height: 400, padding: 20, paddingBottom: 40}}>
        <FlashList
          estimatedItemSize={90}
          keyExtractor={(item: any) => {
            return item.code;
          }}
          data={stripeCountryList}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  props?.payload?.onSelect(item.code);
                  SheetManager.hide(SHEETS.STRIPE_COUNTRY_SHEET);
                }}
                style={{
                  borderBottomColor: 'rgba(0,0,0,0.1)',
                  borderBottomWidth: 1,
                  marginBottom: 10,
                }}>
                <Text style={{fontSize: 17}}>
                  {item.code} - {item.country}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </ActionSheet>
  );
}

export default StripeCountrySheet;
