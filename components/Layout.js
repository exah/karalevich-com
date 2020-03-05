import React, { forwardRef } from 'react'
import { Grid, Text } from './system'
import styled from '@emotion/styled'

export const Layout = forwardRef((props, ref) =>
	<Grid
		ref={ref}
		width={props.width}
		maxHeight={props.maxHeight}
		overflow='hidden'
		gridTemplateColumns={`repeat(${props.columns}, 1fr)`}
		gridColumnGap={props.gap}
		sx={{
			position: 'relative',
			}}
		{...props}
	/>
)

Layout.defaultProps = {
	gridTemplateColumns: 'repeat(12, 1fr)',
	gridColumnGap: 1,
	width: '100%',
}