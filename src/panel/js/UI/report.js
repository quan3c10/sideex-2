class Suite{

    /**
     * @return mixed
     */
    getName()
    {
        return this.name;
    }

    /**
     * @param name
     */
    setName(name)
    {
        this.name = name;
    }

    /**
     * @return mixed
     */
    getFeatures()
    {
        return this.features;
    }

    /**
     * @param features
     */
    setFeatures(features)
    {
        this.features = features;
    }

    addFeature(feature)
    {
        this.features.concat(feature);
    }
}

class Feature{
    getName()
    {
        return this.name;
    }

    /**
     * @param name
     */
    setName(name)
    {
        this.name = name;
    }

    /**
     * @return mixed
     */
    getDescription()
    {
        return this.description;
    }

    /**
     * @param description
     */
    setDescription(description)
    {
        this.description = description;
    }

    /**
     * @return mixed
     */
    getTags()
    {
        return this.tags;
    }

    /**
     * @param tags
     */
    setTags(tags)
    {
        this.tags = tags;
    }

    /**
     * @return mixed
     */
    getFile()
    {
        return this.file;
    }



    /**
     * @param file
     */
    setFile(file)
    {
        this.file = file;
    }

    /**
     * @return mixed
     */
    getScreenshotFolder()
    {
        return this.screenshotFolder;
    }

    /**
     * @param featureName
     */
    setScreenshotFolder(featureName)
    {
        //this.screenshotFolder = str_replace(' ','', featureName);
    }

    /**
     * @return Scenario[]
     */
    getScenarios()
    {
        return this.scenarios;
    }

    /**
     * @param scenarios
     */
    setScenarios(scenarios)
    {
        this.scenarios = scenarios;
    }

    /**
     * @param scenario
     */
    addScenario(scenario)
    {
        scenario.setId(this.scenarioCounter);
        this.scenarioCounter++;
        this.scenarios.concat(scenario);
    }

    /**
     * @return mixed
     */
    getFailedScenarios()
    {
        return this.failedScenarios;
    }

    /**
     * @param failedScenarios
     */
    setFailedScenarios(failedScenarios)
    {
        this.failedScenarios = failedScenarios;
    }

    addFailedScenario()
    {
        this.failedScenarios++;
    }

    /**
     * @return mixed
     */
    getPassedScenarios()
    {
        return this.passedScenarios;
    }

    /**
     * @param passedScenarios
     */
    setPassedScenarios(passedScenarios)
    {
        this.passedScenarios = passedScenarios;
    }

    addPassedScenario()
    {
        this.passedScenarios++;
    }

    /**
     * @return mixed
     */
    getId()
    {
        return this.id;
    }

    /**
     * @param id
     */
    setId(id)
    {
        this.id = id;
    }


    allPassed()
    {
        if(this.failedScenarios === 0) {
            return true;
        }
        return false;
    }

    getPassedClass()
    {
        if (allPassed()) {
            return "success";
        }
        return "failed";
    }

    getPercentPassed()
    {
        return (this.getPassedScenarios() / (this.getTotalAmountOfScenarios())) * 100;
    }

    getPercentFailed()
    {
        return (this.getFailedScenarios() / (this.getTotalAmountOfScenarios())) * 100;
    }

    getTotalAmountOfScenarios()
    {
        return this.getPassedScenarios() + this.getFailedScenarios();
    }
}

class Screnario{
    getName()
    {
        return this.name;
    }


    setName(name)
    {
        this.name = name;
    }

    getScreenshotName()
    {
        return this.screenshotName;
    }

    setScreenshotName(scenarioName)
    {
        //this.screenshotName = str_replace(' ','', $scenarioName) . '.png';
    }

    /**
     * @return int
     */
    getLoopCount()
    {
        return this.loopCount;
    }

    /**
     * @param loopCount
     */
    setLoopCount(loopCount)
    {
        this.loopCount = loopCount;
    }
    /**
     * @return mixed
     */
    getLine()
    {
        return this.line;
    }

    /**
     * @param line
     */
    setLine(line)
    {
        this.line = line;
    }

    /**
     * @return mixed
     */
    getTags()
    {
        return this.tags;
    }

    /**
     * @param tags
     */
    setTags(tags)
    {
        this.tags = tags;
    }

    /**
     * @return boolean
     */
    isPassed()
    {
        return this.passed;
    }

    /**
     * @param passed
     */
    setPassed(passed)
    {
        this.passed = passed;
    }

    /**
     * @return Step[]
     */
    getSteps()
    {
        return this.steps;
    }

    /**
     * @param steps
     */
    setSteps(steps)
    {
        this.steps = steps;
    }

    /**
     * @param step
     */
    addStep(step)
    {
        this.steps.concat(step);
    }

    /**
     * @return int
     */
    getId()
    {
        return this.id;
    }

    /**
     * @param id
     */
    setId(id)
    {
        this.id = id;
    }

    getLoopSize()
    {
        //behat
        return this.loopCount > 0 ? sizeof(this.steps)/this.loopCount : sizeof(this.steps);
    }
}