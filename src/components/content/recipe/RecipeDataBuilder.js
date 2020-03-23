var getLocaleValue = require('../../../utils/utils').getLocaleValue;

var getRecipeData = function(recipe, locale) {

    // title
    let recipeTitle = getLocaleValue(recipe.recipeTitle, locale);

    // recipe description
    let recipeDescription = getLocaleValue(recipe.recipeDescription, locale);

    // masthead image
    let imageMastheadUrl = ''
    let imageMasthead = getLocaleValue(recipe.imageMasthead, locale);
    if (imageMasthead) {
        let imageMastheadFile = imageMasthead.fields.file;
        if (imageMastheadFile) {
            imageMastheadUrl = getLocaleValue(imageMastheadFile).url;
        }
    }

    // foodlabels
    let foodLabels = [];
    if (recipe.foodLabels) {
        let recipeFoodLabels = getLocaleValue(recipe.foodLabels, locale);
        if (recipeFoodLabels && recipeFoodLabels.length) {
            recipeFoodLabels.forEach(foodLabel => {
                let foodLabelFields = foodLabel.fields;
                if (foodLabelFields) {
                    let name = getLocaleValue(foodLabelFields.name, locale);
                    let value = getLocaleValue(foodLabelFields.value, locale);
                    if (name && value) {
                        foodLabels.push({ name, value });
                    }
                }
            });
        }
    }
    

    // difficulty level
    let difficultyLevel = null;
    if (recipe.difficultyLevel) {
        let recipeDifficultyLevel = getLocaleValue(recipe.difficultyLevel, locale);
        if (recipeDifficultyLevel && recipeDifficultyLevel.fields) {
            let name = getLocaleValue(recipeDifficultyLevel.fields.name, locale);
            let tag = getLocaleValue(recipeDifficultyLevel.fields.tag, locale);
            if (name && tag) {
                difficultyLevel =  { name, tag };
            }
        }
    }

    // recipePreparationTime
    let recipePreparationTime = getLocaleValue(recipe.recipePreparationTime, locale);
    // recipeCookTime
    let recipeCookTime = getLocaleValue(recipe.recipeCookTime, locale);
    // recipeCleanUpTime
    let recipeCleanUpTime = getLocaleValue(recipe.recipeCleanUpTime, locale);
    // recipeStepsNo
    let recipeStepsNo = getLocaleValue(recipe.recipeStepsNo, locale);
    //recipeIngredientsNo
    let recipeIngredientsNo = getLocaleValue(recipe.recipeIngredientsNo, locale);

    
    return { recipeTitle, recipeDescription, imageMastheadUrl, foodLabels, difficultyLevel, recipePreparationTime, recipeCookTime, recipeCleanUpTime, recipeStepsNo, recipeIngredientsNo };
}

exports.getRecipeData = getRecipeData;