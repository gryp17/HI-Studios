<!DOCTYPE html>
<html ng-app="hi-studios" ng-controller="langController">
    <head>
        <title ng-bind="text['page_title']"></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Common resources -->
        <?php include 'templates/common_resources.php'; ?>

    </head>
    <body>
        <div id="main-wrapper" class="container-fluid" ng-show="doneLoadingLanguage">
			<!-- Header -->
            <?php include 'templates/header.php'; ?>
			
			<!-- Content -->
            <div class="row">
                <section id="content-wrapper" class="col-lg-12">
                    <div ng-view="">                        
                        
                    </div>
                </section>
            </div>
			
			<!-- Footer -->
            <?php include 'templates/footer.php'; ?>
        </div>
    </body>
</html>
