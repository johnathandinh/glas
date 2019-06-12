/**
 * @author TristanVALCKE / https://github.com/Itee
 */
/* global QUnit */

import * as Constants from './contants'

describe('Constants', (): void => {
	describe('Default Values', (): void => {
		test('', (): void => {
			expect<number>(Constants.MOUSE.LEFT).toBe(0)
			expect<number>(Constants.MOUSE.MIDDLE).toBe(1)
			expect<number>(Constants.MOUSE.RIGHT).toBe(2)

			expect<number>(Constants.CullFaceNone).toBe(0)
			expect<number>(Constants.CullFaceBack).toBe(1)
			expect<number>(Constants.CullFaceFront).toBe(2)
			expect<number>(Constants.CullFaceFrontBack).toBe(3)
			expect<number>(Constants.FrontFaceDirectionCW).toBe(0)
			expect<number>(Constants.FrontFaceDirectionCCW).toBe(1)
			expect<number>(Constants.BasicShadowMap).toBe(0)
			expect<number>(Constants.PCFShadowMap).toBe(1)
			expect<number>(Constants.PCFSoftShadowMap).toBe(2)
			expect<number>(Constants.FrontSide).toBe(0)
			expect<number>(Constants.BackSide).toBe(1)
			expect<number>(Constants.DoubleSide).toBe(2)
			expect<number>(Constants.FlatShading).toBe(1)
			expect<number>(Constants.SmoothShading).toBe(2)
			expect<number>(Constants.NoColors).toBe(0)
			expect<number>(Constants.FaceColors).toBe(1)
			expect<number>(Constants.VertexColors).toBe(2)
			expect<number>(Constants.NoBlending).toBe(0)
			expect<number>(Constants.NormalBlending).toBe(1)
			expect<number>(Constants.AdditiveBlending).toBe(2)
			expect<number>(Constants.SubtractiveBlending).toBe(3)
			expect<number>(Constants.MultiplyBlending).toBe(4)
			expect<number>(Constants.CustomBlending).toBe(5)
			expect<number>(Constants.AddEquation).toBe(100)
			expect<number>(Constants.SubtractEquation).toBe(101)
			expect<number>(Constants.ReverseSubtractEquation).toBe(102)
			expect<number>(Constants.MinEquation).toBe(103)
			expect<number>(Constants.MaxEquation).toBe(104)
			expect<number>(Constants.ZeroFactor).toBe(200)
			expect<number>(Constants.OneFactor).toBe(201)
			expect<number>(Constants.SrcColorFactor).toBe(202)
			expect<number>(Constants.OneMinusSrcColorFactor).toBe(203)
			expect<number>(Constants.SrcAlphaFactor).toBe(204)
			expect<number>(Constants.OneMinusSrcAlphaFactor).toBe(205)
			expect<number>(Constants.DstAlphaFactor).toBe(206)
			expect<number>(Constants.OneMinusDstAlphaFactor).toBe(207)
			expect<number>(Constants.DstColorFactor).toBe(208)
			expect<number>(Constants.OneMinusDstColorFactor).toBe(209)
			expect<number>(Constants.SrcAlphaSaturateFactor).toBe(210)
			expect<number>(Constants.NeverDepth).toBe(0)
			expect<number>(Constants.AlwaysDepth).toBe(1)
			expect<number>(Constants.LessDepth).toBe(2)
			expect<number>(Constants.LessEqualDepth).toBe(3)
			expect<number>(Constants.EqualDepth).toBe(4)
			expect<number>(Constants.GreaterEqualDepth).toBe(5)
			expect<number>(Constants.GreaterDepth).toBe(6)
			expect<number>(Constants.NotEqualDepth).toBe(7)
			expect<number>(Constants.MultiplyOperation).toBe(0)
			expect<number>(Constants.MixOperation).toBe(1)
			expect<number>(Constants.AddOperation).toBe(2)
			expect<number>(Constants.NoToneMapping).toBe(0)
			expect<number>(Constants.LinearToneMapping).toBe(1)
			expect<number>(Constants.ReinhardToneMapping).toBe(2)
			expect<number>(Constants.Uncharted2ToneMapping).toBe(3)
			expect<number>(Constants.CineonToneMapping).toBe(4)
			expect<number>(Constants.UVMapping).toBe(300)
			expect<number>(Constants.CubeReflectionMapping).toBe(301)
			expect<number>(Constants.CubeRefractionMapping).toBe(302)
			expect<number>(Constants.EquirectangularReflectionMapping).toBe(303)
			expect<number>(Constants.EquirectangularRefractionMapping).toBe(304)
			expect<number>(Constants.SphericalReflectionMapping).toBe(305)
			expect<number>(Constants.CubeUVReflectionMapping).toBe(306)
			expect<number>(Constants.CubeUVRefractionMapping).toBe(307)
			expect<number>(Constants.RepeatWrapping).toBe(1000)
			expect<number>(Constants.ClampToEdgeWrapping).toBe(1001)
			expect<number>(Constants.MirroredRepeatWrapping).toBe(1002)
			expect<number>(Constants.NearestFilter).toBe(1003)
			expect<number>(Constants.NearestMipMapNearestFilter).toBe(1004)
			expect<number>(Constants.NearestMipMapLinearFilter).toBe(1005)
			expect<number>(Constants.LinearFilter).toBe(1006)
			expect<number>(Constants.LinearMipMapNearestFilter).toBe(1007)
			expect<number>(Constants.LinearMipMapLinearFilter).toBe(1008)
			expect<number>(Constants.UnsignedByteType).toBe(1009)
			expect<number>(Constants.ByteType).toBe(1010)
			expect<number>(Constants.ShortType).toBe(1011)
			expect<number>(Constants.UnsignedShortType).toBe(1012)
			expect<number>(Constants.IntType).toBe(1013)
			expect<number>(Constants.UnsignedIntType).toBe(1014)
			expect<number>(Constants.FloatType).toBe(1015)
			expect<number>(Constants.HalfFloatType).toBe(1016)
			expect<number>(Constants.UnsignedShort4444Type).toBe(1017)
			expect<number>(Constants.UnsignedShort5551Type).toBe(1018)
			expect<number>(Constants.UnsignedShort565Type).toBe(1019)
			expect<number>(Constants.UnsignedInt248Type).toBe(1020)
			expect<number>(Constants.AlphaFormat).toBe(1021)
			expect<number>(Constants.RGBFormat).toBe(1022)
			expect<number>(Constants.RGBAFormat).toBe(1023)
			expect<number>(Constants.LuminanceFormat).toBe(1024)
			expect<number>(Constants.LuminanceAlphaFormat).toBe(1025)
			expect<number>(Constants.RGBEFormat).toBe(Constants.RGBAFormat)
			expect<number>(Constants.DepthFormat).toBe(1026)
			expect<number>(Constants.DepthStencilFormat).toBe(1027)
			expect<number>(Constants.RGB_S3TC_DXT1_Format).toBe(33776)
			expect<number>(Constants.RGBA_S3TC_DXT1_Format).toBe(33777)
			expect<number>(Constants.RGBA_S3TC_DXT3_Format).toBe(33778)
			expect<number>(Constants.RGBA_S3TC_DXT5_Format).toBe(33779)
			expect<number>(Constants.RGB_PVRTC_4BPPV1_Format).toBe(35840)
			expect<number>(Constants.RGB_PVRTC_2BPPV1_Format).toBe(35841)
			expect<number>(Constants.RGBA_PVRTC_4BPPV1_Format).toBe(35842)
			expect<number>(Constants.RGBA_PVRTC_2BPPV1_Format).toBe(35843)
			expect<number>(Constants.RGB_ETC1_Format).toBe(36196)
			expect<number>(Constants.RGBA_ASTC_4x4_Format).toBe(37808)
			expect<number>(Constants.RGBA_ASTC_5x4_Format).toBe(37809)
			expect<number>(Constants.RGBA_ASTC_5x5_Format).toBe(37810)
			expect<number>(Constants.RGBA_ASTC_6x5_Format).toBe(37811)
			expect<number>(Constants.RGBA_ASTC_6x6_Format).toBe(37812)
			expect<number>(Constants.RGBA_ASTC_8x5_Format).toBe(37813)
			expect<number>(Constants.RGBA_ASTC_8x6_Format).toBe(37814)
			expect<number>(Constants.RGBA_ASTC_8x8_Format).toBe(37815)
			expect<number>(Constants.RGBA_ASTC_10x5_Format).toBe(37816)
			expect<number>(Constants.RGBA_ASTC_10x6_Format).toBe(37817)
			expect<number>(Constants.RGBA_ASTC_10x8_Format).toBe(37818)
			expect<number>(Constants.RGBA_ASTC_10x10_Format).toBe(37819)
			expect<number>(Constants.RGBA_ASTC_12x10_Format).toBe(37820)
			expect<number>(Constants.RGBA_ASTC_12x12_Format).toBe(37821)
			expect<number>(Constants.LoopOnce).toBe(2200)
			expect<number>(Constants.LoopRepeat).toBe(2201)
			expect<number>(Constants.LoopPingPong).toBe(2202)
			expect<number>(Constants.InterpolateDiscrete).toBe(2300)
			expect<number>(Constants.InterpolateLinear).toBe(2301)
			expect<number>(Constants.InterpolateSmooth).toBe(2302)
			expect<number>(Constants.ZeroCurvatureEnding).toBe(2400)
			expect<number>(Constants.ZeroSlopeEnding).toBe(2401)
			expect<number>(Constants.WrapAroundEnding).toBe(2402)
			expect<number>(Constants.TrianglesDrawMode).toBe(0)
			expect<number>(Constants.TriangleStripDrawMode).toBe(1)
			expect<number>(Constants.TriangleFanDrawMode).toBe(2)
			expect<number>(Constants.LinearEncoding).toBe(3000)
			expect<number>(Constants.sRGBEncoding).toBe(3001)
			expect<number>(Constants.GammaEncoding).toBe(3007)
			expect<number>(Constants.RGBEEncoding).toBe(3002)
			expect<number>(Constants.LogLuvEncoding).toBe(3003)
			expect<number>(Constants.RGBM7Encoding).toBe(3004)
			expect<number>(Constants.RGBM16Encoding).toBe(3005)
			expect<number>(Constants.RGBDEncoding).toBe(3006)
			expect<number>(Constants.BasicDepthPacking).toBe(3200)
			expect<number>(Constants.RGBADepthPacking).toBe(3201)
		})
	})
})