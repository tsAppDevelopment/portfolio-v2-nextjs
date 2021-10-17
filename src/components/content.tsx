import {Const} from '../const'

export const Content = ({
  children,
  style = {},
}: {
  children: JSX.Element[] | JSX.Element
  style?: any
}) => {
  return (
    <div
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        display: 'flex',
      }}
    >
      <div
        data-test-id={'inner content wrapper'}
        style={{
          paddingRight: Const.css.contentPad,
          paddingLeft: Const.css.contentPad,
          maxWidth: Const.maxWidth,
          width: '100%',
          paddingBottom: Const.pad * 10,
          ...style,
        }}
      >
        {children}
      </div>
    </div>
  )
}
