import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  DummyBook,
  DummyCamera,
  DummyKarinaDress,
  DummyMacbook,
  DummyPes,
  DummyPhone,
  ILBannerFlashsale,
} from '../../Assets';
import Gap from '../../components/Gap';
import Header from '../../components/Header';
import Countdown from '../../components/atoms/Countdown';
import {colors, fonts} from '../../utils';
import FlashSaleCard from '../../components/FlashSaleCard';

const FlashSale = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Flash Sale" onPress={() => navigation.goBack()} />
      <ScrollView>
        <Image source={ILBannerFlashsale} style={styles.banner} />
        <Gap height={12} />
        <View style={styles.countdown}>
          <Text style={styles.time}>End In</Text>
          <Countdown color="black" style={styles.clock} />
        </View>

        <View style={styles.card}>
          <FlashSaleCard
            image={DummyMacbook}
            title="Apple Macbook Pro..."
            priceDiscount="$ 2,020"
            price="$ 1,300"
            totalSale="(56)"
            location="United Kingdom"
            available="9 Available"
            bar={0.6}
            colorBar={'#FFA500'}
            onPress={() => navigation.navigate('FlashSaleDetail')}
          />
          <FlashSaleCard
            image={DummyKarinaDress}
            title="7 Level Karina Dress..."
            priceDiscount="$ 14"
            price="$ 10"
            totalSale="(16)"
            location="United Kingdom"
            available="24 Available"
            bar={0.8}
            colorBar={'#52B640'}
            onPress={() => navigation.navigate('FlashSaleDetail')}
          />
        </View>
        <View style={styles.card}>
          <FlashSaleCard
            image={DummyPhone}
            title="Samsung Galaxy..."
            priceDiscount="$ 1,000"
            price="$ 950"
            totalSale="(20)"
            location="United Kingdom"
            available="14 Available"
            bar={0.7}
            colorBar={'#52B640'}
          />
          <FlashSaleCard
            image={DummyBook}
            title="Harry Potter Spesial..."
            priceDiscount="$ 25"
            price="$ 20"
            totalSale="(22)"
            location="United Kingdom"
            available="5 Available"
            bar={0.3}
            colorBar={'#FFA500'}
          />
        </View>
        <View style={styles.card}>
          <FlashSaleCard
            image={DummyPes}
            title="Pro Evolution..."
            priceDiscount="$ 50"
            price="$ 30"
            totalSale="(10)"
            location="United Kingdom"
            available="30 Available"
            bar={0.8}
            colorBar={'#52B640'}
          />
          <FlashSaleCard
            image={DummyCamera}
            title="Camera DSLR C1000"
            priceDiscount="$ 400"
            price="$ 200"
            totalSale="(10)"
            location="United Kingdom"
            available="10 Available"
            bar={0.6}
            colorBar={'#52B640'}
          />
        </View>
        <Gap height={40} />
      </ScrollView>
    </View>
  );
};

export default FlashSale;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  banner: {
    width: '100%',
    height: 200,
  },
  countdown: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  time: {
    fontSize: 18,
    fontFamily: fonts.secondary[600],
    marginRight: 18,
    marginTop: 12,
  },
  clock: {
    marginLeft: 12,
    marginTop: 18,
  },
  card: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});
