import React, { FunctionComponent } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { DynamicStyleSheet, useDynamicStyleSheet } from 'react-native-dark-mode'
import { SafeAreaView } from 'react-navigation'

import { img_love, img_mittens } from '../assets'
import { Touchable } from '../components'
import { browser } from '../lib'
import { colors, fonts, layout } from '../styles'

export const Help: FunctionComponent = () => {
  const styles = useDynamicStyleSheet(stylesheet)

  return (
    <SafeAreaView
      style={styles.main}
      forceInset={{
        bottom: 'never',
        top: 'always'
      }}>
      <ScrollView contentContainerStyle={styles.content}>
        <Touchable onPress={() => browser.open('https://mittens.app')}>
          <Image style={styles.mittens} source={img_mittens} />
        </Touchable>
        <Text style={styles.title}>mittens</Text>
        <Text style={styles.description}>
          brings you push notifications {'\n'} from GitHub
        </Text>
        <View style={styles.help}>
          <Text style={styles.subtitle}>tips</Text>
          <Text style={styles.tip}>
            &bull; swipe right on a notification to view actions to open or mark
            as read
          </Text>
          <Text style={styles.tip}>
            &bull; tap the icon on the top right to mark all notifications as
            read
          </Text>
        </View>
        <Touchable
          style={styles.credits}
          onPress={() => browser.open('https://alizahid.dev')}>
          <Text style={styles.credit}>built with</Text>
          <Image style={styles.love} source={img_love} />
          <Text style={styles.credit}>by ali zahid</Text>
        </Touchable>
      </ScrollView>
    </SafeAreaView>
  )
}

const stylesheet = new DynamicStyleSheet({
  content: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
    padding: layout.margin * 2
  },
  credit: {
    ...fonts.small,
    color: colors.foregroundLight
  },
  credits: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  description: {
    ...fonts.small,
    color: colors.foreground,
    marginTop: layout.padding,
    textAlign: 'center'
  },
  help: {
    marginVertical: layout.margin * 2
  },
  love: {
    ...layout.icon,
    marginHorizontal: layout.padding / 2
  },
  main: {
    backgroundColor: colors.background,
    flex: 1
  },
  mittens: {
    ...layout.mittens
  },
  subtitle: {
    ...fonts.subtitle,
    color: colors.foreground,
    textAlign: 'center'
  },
  tip: {
    ...fonts.small,
    color: colors.foreground,
    marginTop: layout.padding,
    textAlign: 'center'
  },
  title: {
    ...fonts.title,
    color: colors.accent,
    marginTop: layout.margin
  }
})
