


const scriptsInEvents = {

	async Es_common_Event20_Act7(runtime, localVars)
	{
		localStorage.setItem("isMusic", runtime.globalVars.isMusic)
	},

	async Es_common_Event23_Act8(runtime, localVars)
	{
		localStorage.setItem("isSFX", runtime.globalVars.isSFX)
	},

	async Es_common_Event30_Act1(runtime, localVars)
	{
		const sfx = localStorage.getItem("isSFX");
		const music = localStorage.getItem("isMusic") 
		
		runtime.globalVars.isSFX = (sfx == null ? 1:sfx);
		
		runtime.globalVars.isMusic = (music == null ? 1:music);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

