Feature: Securian Retirement Calculator

#   Given I am on the "retirement calculator" page of Securian
#    When I type 40 in "current age" field
#	 And I type 68 in "retirement age" field
#	 And I type 100000 in "current annual income" field
#	 And I type 75000 in "current spouse annual income" field
#	 And I type 500000 in "current retirement savings" field
#	 And I type 10 in "current retirement contribution" field
#	 And I type 1 in "annual retirement contribution increase" field
#	 And I select radio button "No" for "social security income"
#	 And I click "Calculate" button
#   Then Verify that "Email my results" button is present

  Scenario: As a user, I would like to check if I am saving enough for my retirement with social security override
    Given I am on the "retirement calculator" page of Securian
    When I type 40 in "current age" field
	 And I type 68 in "retirement age" field
	 And I type 100000 in "current annual income" field
	 And I type 75000 in "current spouse annual income" field
	 And I type 500000 in "current retirement savings" field
	 And I type 10 in "current retirement contribution" field
	 And I type 1 in "annual retirement contribution increase" field
	 And I select radio button "Yes" for "social security income"
	 And I select radio button "Married" for "marital status"
	 And I type 4000 in "social security override" field
	 And I click "Adjust default values" link
	 And I type 500 in "additional income" field
	 And I type 20 in "number of years on retirement income" field
	 And I select radio button "Yes" for "income increase with inflation"
	 And I type 75 in "final annual income" field
	 And I type 8 in "pre-retirement investment return" field
	 And I type 5 in "post-retirement investment return" field
	 And I click "Save changes" button
	 And I click "Calculate" button
    Then Verify that "Email my results" button is present
