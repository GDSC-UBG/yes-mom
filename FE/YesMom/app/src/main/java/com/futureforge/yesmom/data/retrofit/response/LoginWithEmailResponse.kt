package com.futureforge.yesmom.data.retrofit.response

import com.google.gson.annotations.SerializedName

data class LoginWithEmailResponse(

	@field:SerializedName("msg")
	val msg: String? = null,

	@field:SerializedName("key")
	val key: String? = null
)
